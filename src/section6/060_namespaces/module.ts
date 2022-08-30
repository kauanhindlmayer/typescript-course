/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const namespaceName = 'Name from MyNamespace';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const namespacePerson = new NamespacePerson('Kauan');
  console.log(namespacePerson);

  export namespace OtherNamespace {
    export const namespaceName = 'Name from OtherNamespace';
  }
}

const constFromNamespace = 'Value of const from Namespace';
