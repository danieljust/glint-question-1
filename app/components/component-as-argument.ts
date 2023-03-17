import Component from '@glimmer/component';

interface ComponentASignature {
  Element: HTMLDivElement;
  Args: {
    name?: string;
  }
}
export default class ComponentAsArgument extends Component<ComponentASignature> {
  get helloString(): string {
    return 'Hello World';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'component-as-argument': typeof ComponentAsArgument;
  }
}
