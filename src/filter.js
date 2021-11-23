/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { InspectorAdvancedControls } = wp.editor;
const { createHigherOrderComponent } = wp.compose;
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState, Fragment } from '@wordpress/element';
import { parse } from '@wordpress/block-serialization-default-parser';

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        const allowedBlocks = [ 'core/image', 'core/button' ];

        if( !allowedBlocks.includes( props.name ) ){
            return <BlockEdit {...props} />;
        }

        const [ options, setOptions ] = useState( [] )
        const [ popups, setPopups ] = useState( [] )

        useEffect(
            () => {
                apiFetch( {
                    path: '/wp/v2/popper',
                    method: 'GET',
                } ).then( ( result ) => {
                    let opts = [{ value: null, label: __( 'Select a popup', 'popper' ) }]
                    result.map( (i) => {
                        opts.push({ value: i.id, label: i.title.rendered })
                    } )
                    setPopups(result)
                    setOptions(opts)
                } );
            },
          []
        );

        const {
            attributes,
            setAttributes,
            isSelected,
        } = props;

        const {
            popper,
        } = attributes;
        
        return (
            <Fragment>
                <BlockEdit {...props} />
                { isSelected &&
                    <InspectorAdvancedControls>
                        <SelectControl
                            label={ __( 'Mobile Devices Visibity' ) }
                            value={ popper }
                            options={ options }
                            onChange={ (val) => {
                                setAttributes( { popper: val } )
                                console.log(parse(popups[0].content.rendered))
                            } }
                            help={ __( 'Open a popup', 'popper' ) }
                        />
                    </InspectorAdvancedControls>
                }

            </Fragment>
        );
    };
}, 'withAdvancedControls');

addFilter(
    'editor.BlockEdit',
    'formello/popper-advanced-control',
    withAdvancedControls
);

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
    
    const allowedBlocks = [ 'core/image', 'core/button' ];

    //check if object exists for old Gutenberg version compatibility
    if( allowedBlocks.includes( settings.name ) ){
    
        settings.attributes = Object.assign( settings.attributes, {
            popper:{ 
                type: 'numeric',
                default: null,
            }
        });
    
    }

    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'formello/popper-custom-attributes',
    addAttributes
);