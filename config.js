 module.exports = {
  apps : [{
    name: 'SOURCE MDM 2.0',
    script: './index.js',
    args: '',
    instances: 'max',
    autorestart: true,
    watch: false,
instance_var:'INSTANCE_ID'
  }],
  
};  
