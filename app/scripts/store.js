import UserCollection from './Collections/UserCollection'
import MessageCollection from './Collections/MessageCollection'
import UserModel from './Models/UserModel'
import SessionModel from './Models/SessionModel'
import MessageModel from './Models/MessageModel'
import OfferModel from './Models/OfferModel'
import OfferCollection from './Collections/OfferCollection'
import AssetModel from './Models/AssetModel'
import AssetCollection from './Collections/AssetCollection'

export default {
  sessionModel: new SessionModel(),
  userModel: new UserModel(),
  userCollection: new UserCollection(),
  messageModel: new MessageModel(),
  messageCollection: new MessageCollection(),
  offerModel: new OfferModel(),
  offerCollection: new OfferCollection(),
  assetModel: new AssetModel(),
  assetCollection: new AssetCollection()
}
