import './UserItem.scss';
import { IUserItemType } from './UserItemType';

const UserItem: React.FC<IUserItemType> = ({ user }) => {
   return (
      <div className='user-item'>
         <div className='user-item__information-container'>
            <p>
               <span>Name:</span> {user.name}
            </p>
            <p>
               <span>Username:</span> {user.username}
            </p>
            <p>
               <span>Email:</span> {user.email}
            </p>
            <p>
               <span>Phone:</span> {user.phone}
            </p>
            <p>
               <span>Website:</span> {user.website}
            </p>
         </div>
         <div className='user-item__information-container'>
            <p>
               <span>City:</span> {user.address.city}
            </p>
            <p>
               <span>Street:</span> {user.address.street}
            </p>
            <p>
               <span>Suite:</span> {user.address.suite}
            </p>
            <p>
               <span>Zip Code:</span> {user.address.zipcode}
            </p>
            <p>
               <span>Geo:</span> {user.address.geo.lng}, {user.address.geo.lat}
            </p>
         </div>
         <div className='user-item__information-container'>
            <p>
               <span>Company:</span> {user.company.name}
            </p>
            <p>
               <span>Catch Phrase:</span> {user.company.catchPhrase}
            </p>
            <p>
               <span>BS:</span> {user.company.bs}
            </p>
         </div>
      </div>
   );
};

export default UserItem;
