const StoreFactory = function( name, type ){/* this would usually be in a separate js file */
    'use strict';
    const engine = !type || type.toLowerCase() === 'local' ? localStorage : sessionStorage;

    const set=function( data ){
        engine.setItem( name, JSON.stringify( data ) );
    };
    const get=function(){
        return exists( name ) ? JSON.parse( engine.getItem( name ) ) : false;
    };
    const remove=function(){
        engine.removeItem( name );
    };
    const exists=function(){
        return engine.getItem( name )==null ? false : true;
    };
    const create=function(){
        if( !exists() ) set( arguments[0] || {} );
    };

    return Object.freeze({
        set,
        get,
        exists,
        create,
        remove
    });
}

export default StoreFactory;