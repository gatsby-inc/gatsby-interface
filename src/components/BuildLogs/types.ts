export enum BuildActivityStatus {
  InProgress = "IN_PROGRESS",
  NotStarted = "NOT_STARTED",
  Failed = "FAILED",
  Interrupted = "INTERRUPTED",
  Success = "SUCCESS",
}

export enum BuildActivityType {
  Progress = "PROGRESS",
  Spinner = "SPINNER",
  Pending = "PENDING",
  Success = "SUCCESS",
  Hidden = "HIDDEN",
}

export enum StructuredLogLevel {
  All = "ALL",
  Log = "LOG",
  Warning = "WARNING",
  Info = "INFO",
  Success = "SUCCESS",
  Debug = "DEBUG",
  Error = "ERROR",
}

export type Location = {
  line?: number | null
  column?: number | null
}

export type BuildLogItem = {
  id: string
  message?: string | null
  level?: StructuredLogLevel | null
  activity?: BuildActivity | null
  filePath?: string | null
  context?: { [k: string]: string } | null
  docsUrl?: string | null
  errorUrl?: string | null
  location?: { start?: Location | null; end?: Location | null } | null
}

export type BuildActivity = {
  id: string
  name?: string | null
  message?: string | null
  statusText?: string | null
  type: BuildActivityType
  status: BuildActivityStatus
  duration?: number | null
  current?: number | null
  total?: number | null
}
