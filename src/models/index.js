import User from './user'
import Ticket from './ticket'
import TicketType from './tickettype'
import Priority from './ticketpriority'
import TicketTags from './tag'
import Role from './role'
import RoleOrder from './roleorder'
import Session from './session'
import Setting from './setting'
import Group from './group'
import Team from './team'
import Department from './department'
import Message from './chat/message'
import Conversation from './chat/conversation'

export const UserModel = User
export const TicketModel = Ticket
export const TicketTypeModel = TicketType
export const PriorityModel = Priority
export const TicketTagsModel = TicketTags
export const RoleModel = Role
export const RoleOrderModel = RoleOrder
export const SessionModel = Session
export const SettingModel = Setting
export const GroupModel = Group
export const TeamModel = Team
export const DepartmentModel = Department
export const MessageModel = Message
export const ConversationModel = Conversation

export default {
  UserModel: User,
  TicketModel: Ticket,
  TicketTypeModel: TicketType,
  PriorityModel: Priority,
  TicketTagsModel: TicketTags,
  RoleModel: Role,
  RoleOrderModel: RoleOrder,
  SessionModel: Session,
  SettingModel: Setting,
  GroupModel: Group,
  TeamModel: Team,
  DepartmentModel: Department,
  MessageModel: Message,
  ConversationModel: Conversation
}