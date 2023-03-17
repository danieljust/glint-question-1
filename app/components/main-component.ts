import Component from '@glimmer/component';
import ComponentAsArgument from './component-as-argument';

interface ComponentASignature {
  Element: HTMLDivElement;
  Args: {
    onlyComponent: typeof ComponentAsArgument; 
    componentUnionString: string | typeof ComponentAsArgument; 
  }
}

export default class MainComponent extends Component<ComponentASignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    MainComponent: typeof MainComponent;
  }
}