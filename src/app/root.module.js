import '../sass/styles.scss';
import angular from 'angular';
import RootComponent from './root.component';

const RootModule = angular
  .module('root', [])
  .component('root', RootComponent);

export default RootModule;
