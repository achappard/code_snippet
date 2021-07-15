const mix = require('laravel-mix').setPublicPath('public');

mix.js('src/js/app.js', 'public/js')
    .copy('src/img', 'public/img')
    .copy('src/html/index.html', 'public/');
    
// Add versioning to assets in production environment
if ( mix.inProduction() ) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    //drop_console: true,
                    pure_funcs: ['console.log', 'console.debug', 'console.warn']
                }
            }
        }
    });
    mix.version();
}

//disabled mix-manifest
Mix.manifest.refresh = _ => void 0
