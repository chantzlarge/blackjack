import Session from "./session";

export default class SessionService {
  CreateSession (): Session {
    return new Session()
  }

  RevokeSession () {
    // TBD
  }
}
