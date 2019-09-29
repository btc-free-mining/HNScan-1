import { Resource } from "rest-hooks";

export default class StatusResource extends Resource {
        host = null;
        port = null;
        key = null;
        network = null;
        progress = null;
        version = null;
        agent = null;
        connections = null;
        height = null;
        difficulty = null;
        uptime = null;
        totalBytesRecv = null;
        totalBytesSent = null;

  pk() {
    return "the_only_one";
  }

  static urlRoot = "http://localhost:8080/status/";

  /**
   * Get the url for a Resource
   */
  static url(
    urlParams?: { articleId: string } & Partial<AbstractInstanceType<T>>
  ) {
    return "http://localhost:8080/status";
    // since we're overriding the url() function we must keep the type the
    // same, which means we might not get urlParams
  }
}
