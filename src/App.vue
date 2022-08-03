<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}

  nav,footer,header,aside{display: block;}

  html,body{
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  input,button,textarea{font-family:inherit;}

  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}

  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}

  body {
    font-family: 'Lato';
    font-style: normal;
    line-height: 1.2;
    font-weight: normal;
    color: #102746;
  }

  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local(''),
    url('fonts/lato-v23-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('fonts/lato-v23-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* lato-700 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local(''),
    url('fonts/lato-v23-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('fonts/lato-v23-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* lato-900 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: local(''),
    url('fonts/lato-v23-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('fonts/lato-v23-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
</style>
