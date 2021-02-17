import CardAddingContainer from './components/Add/CardAddingContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import LoginConteiner from './components/AuthFolder/LoginConteiner';
import RegisterForm from './components/AuthFolder/RegisterForm';
import ContactChangeConteiner from './components/ContactChange/ContactChangeConteiner';
import ContactInfo from './components/ContactInfo/ContactInfo';

export const ALL_ROUTES = [
  {
     path: '/contacts',
     access:  'private',
     component: ContactsContainer
  },
  {
     path: '/add',
     access:  'private',
     component: CardAddingContainer
  },
  {
     path: '/contact-change/:fullname',
     access:  'private',
     component: ContactChangeConteiner
  },
  {
     path: '/contacts/:fullname',
     access:  'private',
     component: ContactInfo
  },
  {
     path: '/login',
     access:  'public',
     component: LoginConteiner
  },
  {
     path: '/register',
     access:  'public',
     component: RegisterForm
  }
]
