import {
  captureException as SentryCaptureException,
  withScope as SentryWithScope,
} from "@sentry/react";
import React from "react";
import { ROUTE_404 } from "../constants/index";
import { withRouter } from "./withRouter";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null, eventId: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    SentryWithScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = SentryCaptureException(error);
      this.setState({ eventId });
    });
    this.props.navigate(ROUTE_404, { eventId: this.state.eventId });
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
