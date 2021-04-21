interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // NOTE: Promise<T> Generic Type is <Contact[]>
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
    // findContactByPhone(PhoneType.Home); // (enum member) PhoneType.Home = "home"
  }

  fetchData(): void {
    // fetchData() 는 반환값이 없기때문에 void
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  /* NOTE: name은 String이고 반환값은 Contact[]이다.  */
  findContactByName(name: string): Contact[] {
    // name = string , 반환값은 Contact[]
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    // address = string, 반환값은 Contact[]
    return this.contacts.filter((contact) => contact.address === address);
  }

  // home, office, studio
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  // findContactByPhone('offiice'); 오류를 발생하지 않기위해
  // findContactByPhone('homeeee');
  // findContactByPhone(PhoneType.home);

  addContact(contact: Contact): void {
    // 1. addContact는 array에 추가(push)하는 것이기때문에 contact의 type은 Contact
    // 2. return(반환값)은 없기때문에 :void
    this.contacts.push(contact);
  }

  /* ------------------------------------------------ */
  /*ex) let contact = [
    { name: 'Tony', address: 'tokyo'},
    { name: 'Captin', address: 'osaka'}
  ] 
  contact.map(function (name) {
    return name.name;
  }); // ['Tony', 'Captain']
  */
  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    // map 을 돌려서 오기때문에 address의 string 배열
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

const div = document.querySelector("div") as HTMLDivElement; //var div: HTMLDivElement | null
// as HTMLDivElement; 단언 헀으니까 var div: HTMLDivElement
div.innerText; //var div: HTMLDivElement | null -> as HTMLDivElement : var div: HTMLDivElement
if (div) {
  div.innerText;
}

new AddressBook();
