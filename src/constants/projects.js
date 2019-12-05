import { PROJECT_CSC, PROJECT_USESAFER, PROJECT_HS_GMB, PROJECT_ESS } from './routes';
import cscImage from '../assets/images/projects/cscImage.png';
import hsGmbImage from '../assets/images/projects/hsGmbImage.png';
import essImage from '../assets/images/projects/essImage.png';
import useSaferImage from '../assets/images/projects/useSaferImage.png';

// UseSafer Project images
import useSaferImage1 from '../assets/images/projects/useSafer/image1.png';
import useSaferImage2 from '../assets/images/projects/useSafer/image2.png';
import useSaferImage3 from '../assets/images/projects/useSafer/image3.png';
import useSaferImage4 from '../assets/images/projects/useSafer/image4.png';
import useSaferImage5 from '../assets/images/projects/useSafer/image5.png';
import useSaferImage6 from '../assets/images/projects/useSafer/image6.png';
import useSaferImage7 from '../assets/images/projects/useSafer/image7.png';
import useSaferImage8 from '../assets/images/projects/useSafer/image8.png';
import useSaferImage9 from '../assets/images/projects/useSafer/image9.png';
import useSaferImage10 from '../assets/images/projects/useSafer/image10.png';
import useSaferImage11 from '../assets/images/projects/useSafer/image11.png';
import useSaferImage12 from '../assets/images/projects/useSafer/image12.png';
import useSaferImage13 from '../assets/images/projects/useSafer/image13.png';
import useSaferImage14 from '../assets/images/projects/useSafer/image14.png';
import useSaferImage15 from '../assets/images/projects/useSafer/image15.png';

// Hootsuite GMB Project images
import hootsuiteGmbImage1 from '../assets/images/projects/hootsuiteGmb/image1.png';
import hootsuiteGmbImage2 from '../assets/images/projects/hootsuiteGmb/image2.png';
import hootsuiteGmbImage3 from '../assets/images/projects/hootsuiteGmb/image3.png';
import hootsuiteGmbImage4 from '../assets/images/projects/hootsuiteGmb/image4.png';
import hootsuiteGmbImage5 from '../assets/images/projects/hootsuiteGmb/image5.png';
import hootsuiteGmbImage6 from '../assets/images/projects/hootsuiteGmb/image6.png';
import hootsuiteGmbImage7 from '../assets/images/projects/hootsuiteGmb/image7.png';

// Chinatown Storytelling Centre Project images
import cscImage1 from '../assets/images/projects/cscVancouver/image1.png';
import cscImage2 from '../assets/images/projects/cscVancouver/image2.png';
import cscImage3 from '../assets/images/projects/cscVancouver/image3.png';
import cscImage4 from '../assets/images/projects/cscVancouver/image4.png';
import cscImage5 from '../assets/images/projects/cscVancouver/image5.png';
import cscImage6 from '../assets/images/projects/cscVancouver/image6.png';
import cscImage7 from '../assets/images/projects/cscVancouver/image7.png';
import cscImage8 from '../assets/images/projects/cscVancouver/image8.png';
import cscImage9 from '../assets/images/projects/cscVancouver/image9.png';

// UVic ESS Project images
import uvicEssImage1 from '../assets/images/projects/uvicEss/image1.png';
import uvicEssImage2 from '../assets/images/projects/uvicEss/image2.png';

export const PROJECTS = [
  {
    image: cscImage,
    title: 'CSC Vancouver',
    tagline: 'A heritage and history sharing service',
    description: 'A website that displays visitor submitted photos and their stories on a postcard wall at the Chinatown Storytelling Centre in Vancouver. Includes an admin portal that allows administrators to view, manage and share postcards to social media.',
    link: PROJECT_CSC
  },
  {
    image: useSaferImage,
    title: 'UseSafer',
    tagline: 'A drug overdose tracking dashboard',
    description: 'A dashboard that allows BCEHS employees to track drug overdoses submitted through the UseSafer app, giving them a holistic view of closed case statuses, and allowing application management.',
    link: PROJECT_USESAFER
  },
  {
    image: hsGmbImage,
    title: 'Hootsuite GMB',
    tagline: 'A simpler business management solution',
    description: 'A Hootsuite integration with the Google My Business service that allows business owners to manage their business\' reviews, questions, and posts in the same place as the rest of their social media.',
    link: PROJECT_HS_GMB
  },
  {
    image: essImage,
    title: 'UVic ESS',
    tagline: 'A redesigned UI fit for modern times',
    description: 'A refreshed WordPress website for the University of Victoria\'s Engineering Student Society that embraces Google\'s Material Design, while staying true to the faculty\'s aesthetic.',
    link: PROJECT_ESS
  }
];

export const USESAFER_PROJECT_INFO = {
  projectTitle: 'UseSafer Admin Dashboard',
  projectSubtitle: 'A drug overdose tracking dashboard',
  isLargeImage: true,
  isFreshworks: true,
  projectContent: [
    {
      title: 'Overview',
      content: `A dashboard that allows BCEHS employees to track drug overdoses submitted through 
                the UseSafer app, giving them a holistic view of closed case statuses, and allowing 
                application management. The application's frontend was built with TypeScript, React,
                Redux, and Ant Design. The backend was built using TypeScript, PostgreSQL, TypeORM
                and NestJS.`,
      images: [],
      imageAlt: 'none'
    },
    {
      title: 'Login Screen',
      content: `The admin dashboard is only viewable by authorized users, and requires a 
                username and password to sign in. On successful login, the backend sends back 
                an authorization token which is then stored and used for subsequent requests. 
                Using the NPM package "redux-persist", the user's login state is saved, keeping
                a session active until the authorization token expires or the user manually logs 
                out.`,
      images: [useSaferImage1],
      imageAlt: 'login'
    },
    {
      title: 'Validation',
      content: `Validation is done on a field level for all the forms that are used
                throughout the application. Password creation was matched to a predefined regex,
                emails, names, and numerical values are all restricted to the appropriate values.`,
      images: [useSaferImage2],
      imageAlt: 'validation'
    },
    {
      title: 'Default Passwords',
      content: `The default password for a new admin account is defined by an existing admin. In order
                to keep all users' login data private, the user is prompted to change their password
                every time they login until they change their password.`,
      images: [useSaferImage3],
      imageAlt: 'default password'
    },
    {
      title: 'Case List View',
      content: `In the Case List view, all current cases are displayed (10 at a time). From here, an admin
                can see an overview of all current cases. This list can then be filtered by case
                status, or searched by case ID.`,
      images: [useSaferImage4, useSaferImage5, useSaferImage6],
      imageAlt: 'case list view'
    },
    {
      title: 'Case View',
      content: `In the Case view, all information for a single case is shown. An admin can see when
                the case was created, the case status, the user's drug use plan, and any additional
                comments that may have been added by another admin. The admin can then close or 
                revisit the case to update it's details.`,
      images: [useSaferImage7, useSaferImage8],
      imageAlt: 'case view'
    },
    {
      title: 'Analytics View',
      content: `The Analytics view shows events from the corresponding UseSafer apps on Android and iOS.
                When certain API endpoints are hit, a log is created with the event that was triggered.
                This data is then listed in a searchable, filterable table, with the option to export as
                a CSV.`,
      images: [useSaferImage9],
      imageAlt: 'analytics view'
    },
    {
      title: 'Settings View',
      content: `The Settings view allows admins to create, edit and delete admins, adjust their own 
                account information, and change the iOS and Android app modes. These functions are
                available based on the type of admin that is logged in.`,
      images: [useSaferImage10, useSaferImage11, useSaferImage12, useSaferImage13],
      imageAlt: 'settings view'
    },
    {
      title: 'Buildings Subview',
      content: `The Buildings subview allows admins to create new safe zone buildings. When adding a
                new building or modifying an existing building, a Google Maps autocomplete component
                has been added for ease of use. This component autofills the form based off the 
                selected location's details.`,
      images: [useSaferImage14, useSaferImage15],
      imageAlt: 'buildings subview'
    }
  ]
};

export const HS_GMB_PROJECT_INFO = {
  projectTitle: 'Google My Business Hootsuite Integration',
  projectSubtitle: 'A simpler business management solution',
  isLargeImage: false,
  isFreshworks: true,
  projectContent: [
    {
      title: 'Overview',
      content: `A Hootsuite integration with the Google My Business service that allows business 
                owners to manage their business' reviews, questions, and posts in the same place 
                as the rest of their social media. This application was built using React, Redux
                on the frontend, and TypeScript, PostgreSQL, and TypeORM on the backend.`,
      images: [],
      imageAlt: 'none'
    },
    {
      title: 'Streams',
      content: `The app is technically built as three separate mini-apps called streams.
                These streams (Reviews, Questions, and Posts) allow users to manage different
                components on their Google business listing. Each stream is a treated as a feed,
                showing up to three reviews, questions, or posts, with the ability to load more.
                Since the applications run in the Hootsuite dashboard, each application instance
                is treated as a separate app loaded in an iFrame.`,
      images: [hootsuiteGmbImage1],
      imageAlt: 'streams'
    },
    {
      title: 'Authentication',
      content: `When a stream is added to the dashboard it authenticates with Hootsuite
                using a shared secret and prompts the user to login using Google OAuth2
                to allow access to their business listings. An authentication token is 
                returned, and stored on the backend to keep the user logged in during 
                subsequent visits to the stream. When the authentication token expires,
                it is automatically exchanged for a new one.`,
      images: [hootsuiteGmbImage2],
      imageAlt: 'login and authentication'
    },
    {
      title: 'Reviews & Questions',
      content: `From the Reviews and Questions streams, users can reply or answer to 
                reviews and questions respectively. Replies and answers can be edited
                or deleted, and mimic the design of the native GMB dashboard.`,
      images: [hootsuiteGmbImage3, hootsuiteGmbImage4],
      imageAlt: 'reviews and questions stream functionality examples'
    },
    {
      title: 'Posts',
      content: `In the Posts stream, posts can be created or edited, with a variety of 
                options. the user can select which location they would like to post to, 
                a photo to attach, and a CTA (Call To Action) button. The create/edit 
                post opens in a separate iFrame rendered as a modal due to the way 
                Hootsuite chooses to incorporate modals into their site. This meant that 
                sharing data between the stream and modal had to be done through GET 
                parameters in the URL. It also meant that the application had to be split 
                into two separate bundles - one that handled the stream logic, and 
                another to handle the modal.`,
      images: [hootsuiteGmbImage5],
      imageAlt: 'posts stream functionality examples'
    },
    {
      title: 'Google Photos and Drive Integration',
      content: `In addition to being able to choose local images to attach to a post,
                user's can also select photos from either their Google Photos library
                or from their Google Drive file system. The user will be prompted to 
                accept new permissions to allow access to their files and photos. 
                The biggest challenge here was rendering the Google Drive file picker
                inside the modal, as it's user interface was designed with a larger 
                window in mind, and had yet to be updated to meet Google's Material
                Design guidelines.`,
      images: [hootsuiteGmbImage6],
      imageAlt: 'google drive and photos integration'
    },
    {
      title: 'Notifications',
      content: `In order to keep users up to date with the most current features and 
                warnings, notifications can be added from the admin dashboard to
                periodically show new information. Notifications can be configured to 
                only display in certain streams, be a warning or informational message,
                and have a fixed expiry. This allows an admin to easily convey relevant
                information to users at any given time.`,
      images: [hootsuiteGmbImage7],
      imageAlt: 'notifications example'
    }
  ]
};

export const CSC_VANCOUVER_PROJECT_INFO = {
  projectTitle: 'Chinatown Storytelling Centre Web App',
  projectSubtitle: 'A heritage and history sharing service',
  isLargeImage: true,
  isFreshworks: true,
  projectContent: [
    {
      title: 'Overview',
      content: `A website that displays visitor submitted photos and their stories on a postcard 
                wall at the Chinatown Storytelling Centre in Vancouver. Includes an admin portal 
                that allows administrators to view, manage and share postcards to social media. 
                The application was built using React and Redux, and uses Back4App as a
                pseudo-backend and database, which is an abstraction over Parse.`,
      images: [],
      imageAlt: 'none'
    },
    {
      title: 'Login Screen',
      content: `The admin dashboard is only viewable by authorized users, and requires a 
                username and password to sign in. On successful login, the Parse backend sends 
                back an authorization token which is then stored and used for subsequent requests. 
                Using the NPM package "redux-persist", the user's login state is saved, keeping
                a session active until the authorization token expires or the user manually logs 
                out.`,
      images: [cscImage1],
      imageAlt: 'login'
    },
    {
      title: 'Overview Page',
      content: `This page displays a list of all the user submitted postcards, sorted from newest 
                to oldest. From here, an administrator can perform various actions to manage the
                submitted postcards. By default, the page shows 10 postcards, and then shows 10 more 
                as the administrator scrolls, until all the postcards have been loaded. The maximum 
                number of postcards that the application can store at once is 500. Once that limit has 
                been reached, the application will begin deleting postcards, deleting the oldest, 
                unlocked postcards first.`,
      images: [cscImage2],
      imageAlt: 'overview page'
    },
    {
      title: 'Postcard Counts',
      content: `The "Postcards" card shows a count of the total number of postcards currently stored. The 
                maximum is 500 postcards.
                The "Locked" card shows a count of postcards that are currently locked. The maximum is 400 
                postcards.
                The "in Queue" card shows a count of postcards that are in the queue to be posted to social 
                media.
                The "Posted Online" card shows a count of the total number of postcards that have been posted 
                to social media.`,
      images: [cscImage3],
      imageAlt: 'postcard counts'
    },
    {
      title: 'Postcard Actions',
      content: `There are three actions that can be taken on a postcard: Delete, Lock/Unlock, and Share. The
                Delete button deletes a postcard immediately, and removes it from the Postcard Wall if it is
                currently being displayed. The Lock/Unlock button allows an administrator to keep a postcard
                in the rotation queue on the Postcard Wall. The Share button posts the postcard image, text
                and preselected hashtags to the CSC's Facebook and Twitter accounts. When sharing a postcard 
                to social media, two options are available. The postcard can either be posted immediately, or 
                scheduled for posting at a later date and time.`,
      images: [cscImage4, cscImage5],
      imageAlt: 'postcard actions'
    },
    {
      title: 'Locked Page',
      content: `This page functions identically to the Overview page, except that it only shows locked 
                postcards. The maximum number of locked postcards is 400, in order to keep enough space (100 
                postcards) for new visitors to submit their postcards.`,
      images: [cscImage6],
      imageAlt: 'locked page'
    },
    {
      title: 'Mailing List Page',
      content: `This page shows a list of all the users who submitted a postcard and opted-in to receiving 
                marketing information via email. The list shows a user’s name, email and the date they 
                submitted a postcard. The Export button allows an administrator to export and download the 
                mailing list as a CSV file for easier management, and sharing with third-party services.`,
      images: [cscImage7],
      imageAlt: 'mailing list page'
    },
    {
      title: 'Manage Page',
      content: `This page allows an administrator to edit the hashtags that will be automatically appended to 
                all social media posts. The hashtags that are set at the time of sharing or scheduling a post 
                will be the hashtags that are appended to a post.`,
      images: [cscImage8],
      imageAlt: 'manage page'
    },
    {
      title: 'Postcard Wall',
      content: `The Postcard Wall displays two postcards at a time, that rotate through the collection of user 
                submitted postcards. The postcards switch out every 20 seconds, and are chosen in a pseudo-random 
                way, allowing the selection of postcards to be diverse, but also controlled in a way that is 
                pleasing to the visitors at the CSC. The top left postcard randomly cycles through the unlocked 
                postcards in the application. If a new postcard has been submitted, then on the next cycle, it will 
                display the newest postcard. This is done using Parse's Live Queries, which automatically pushes new
                content to the application on database updates and inserts.`,
      images: [cscImage9],
      imageAlt: 'postcard wall'
    }
  ]
};

export const ESS_UVIC_PROJECT_INFO = {
  projectTitle: 'UVic\'s Engineering Students\' Society Website',
  projectSubtitle: 'A redesigned UI fit for modern times',
  isLargeImage: true,
  isFreshworks: false,
  projectContent: [
    {
      title: 'Overview',
      content: `A refreshed WordPress website for the University of Victoria's Engineering Student Society that 
                embraces Google's Material Design, while staying true to the faculty's aesthetic. This project was 
                solely done through WordPress, and was mostly HTML and CSS adjustments in a child theme. Looking back,
                there are some things I would've have changed about this design. For starters, the cards on the home
                page could use more padding, to prevent the content from feeling cramped. Secondly, the shadows could
                have been softened more, as they are quite dark and heavy in their current iteration.`,
      images: [],
      imageAlt: 'none'
    },
    {
      title: 'Redesign',
      content: `The ESS website changes frequently, as the roster of executives rotates every 4 month semester. The
                version that I created (which is quite similar to the current version of the website) is available at
                the link below, via the Wayback Machine.`,
      images: [uvicEssImage1],
      imageAlt: 'redesigned ESS website',
      link: 'https://tinyurl.com/redesigned-ess-website',
      linkText: 'View site'
    },
    {
      title: 'Legacy',
      content: `The older version of the ESS website that was in use prior to the redesign is available at the link 
                below, via the Wayback Machine. Take a look at the difference between the two sites!`,
      images: [uvicEssImage2],
      imageAlt: 'legacy ESS website',
      link: 'https://tinyurl.com/old-ess-website',
      linkText: 'View site'
    }
  ]
};