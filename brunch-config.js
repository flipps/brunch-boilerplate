exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/app.js',
              'vendor.js': /ˆbower_components|vendor/
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/app.js',
    }
  },

  conventions: {
    ignored: [
      /[\\/]_/,
      /.*\.d\.ts$/
    ],
    assets: /^app\/assets\//
  },

  paths: {
    watched: [
      'app',
      'assets'
    ],

    public: 'public'
  },

  plugins: {
    sass: {
      mode: 'native',
      options: {
        allowCache: true,
        includePaths: ['app/css']
      }
    },
    babel: {
      presets: ['latest'],
      ignore: [/ˆ(bower_components|vendor)/]
    },
    coffeescript: {
      bare: true,
      includePaths: ['app/js']
    }
  }
}