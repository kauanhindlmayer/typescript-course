import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndivualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Kauan',
      'Hindlmayer',
      '000.000.000-00',
    );
    expect(sut).toHaveProperty('firstName', 'Kauan');
    expect(sut).toHaveProperty('lastName', 'Hindlmayer');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer(
      'Kauan',
      'Hindlmayer',
      '000.000.000-00',
    );
    expect(sut.getName()).toBe('Kauan Hindlmayer');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Kauan', '000.000.000.000-00');
    expect(sut).toHaveProperty('name', 'Kauan');
    expect(sut).toHaveProperty('cnpj', '000.000.000.000-00');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Kauan', '000.000.000.000-00');
    expect(sut.getName()).toBe('Kauan');
    expect(sut.getIDN()).toBe('000.000.000.000-00');
  });
});
