import { UseQueryResult, QueryFunctionContext } from 'react-query'
import { SuccessType, ErrorType } from '../../apis/type'
// const HISTORY = 'history'

export type UseHistoryType = (
  params: Params,
  token: string
) => UseQueryResult<HistoryLogDto, ErrorType>

export type HistoryFetcherType = (
  context: QueryFunctionContext<[string, Params, string]>
) => Promise<SuccessType<HistoryLogDto>>

// 以下不用詳細閱讀，為API資料的型別設定
// Request
export type Params = {
  searchType?: 'devices' | 'events'
  page?: number // default 1
  start?: number
  end?: number
  counts?: number
  // ====
  type?: LogType
  limit?: number // default 10
  order?: 'desc' | 'asc'
  roomId?: number
  roomName?: string
  roomSerialNumber?: string
  deviceId?: number
  serialNumber?: string
  modbusSlaveId?: number
  category?: DeviceType // dongle , class_meter
  onOff?: number // 0,1
  cardCategory?: string
  // 未插卡 , 儲值卡 , 維護卡 , 時段卡 , 強制卡 , 免費卡
  cardReaderMode?: number // 0,1
  cardExisted?: number // 0,1
  cardReaderStatus?: number // 0,2,6 for 玖鼎
  cardNumber?: string // 0000000000000001
  cardReaderConnect?: number // 0,1
  enable?: boolean

  // startDate?: number;
  // startTime?: number;
  // endDate?: number;
  // endTime?: number;
}

export enum LogType {
  TELEMETRY = 'telemetry',
  OPEN_ADR = 'openADR',
  OFF_LOADING = 'offloading',
  SCHEDULE = 'schedule',
  CLOUD_CONTROL = 'cloudControl',
  IPC_CONTROL = 'ipcControl',
  SYSTEM = 'system',
  SERVER_OPERATE = 'serverOperate',
}

export enum DeviceType {
  CLASS_METER = 'class_meter',
  DONGLE = 'dongle',
  CARD_READER = 'card_reader',
  AIR_CONDITIONER_TOTAL_METER = 'ac_total_meter',
  SCHOOL_TOTAL_METER = 'school_total_meter',
  PV_TOTAL_METER = 'pv_total_meter',
  TOTAL_METER = 'total_meter',
  STREETLIGHT = 'light',
  LUMIN = 'lumin',
  IPC = 'ipc',
  DASHBOARD = 'dashboard',
  SWITCH = 'switch',
  DEPOSIT_SYSTEM = 'deposit_system',
  GATEWAY = 'gateway',
  RENEWABLE_ENERGY = 'renewable_energy',
}

// Response
export type HistoryLogDto = {
  data:
    | AcLogListDto[]
    | MeterLogListDto[]
    | TotalMeterLogListDto[]
    | EventLogListDto[]
  counts: number
}

export type BasicLogListDto = {
  id: string
  timestamp: number
  device: {
    category: string | null
    modbusSlaveId: number | null
    roomName: string | null
    roomSerialNumber: string | null
    serialNumber: string | null
  }
}

export type AcLogListDto = BasicLogListDto & {
  reSend: {
    counts: number | null
    success: boolean
    timestamp: number
  }
  status: AcStatusDto
  success: boolean
}

export type MeterLogListDto = BasicLogListDto & {
  reSend: {
    counts: number | null
    success: boolean
    timestamp: number
  }
  status: MeterStatusDto
  success: boolean
}

export type TotalMeterLogListDto = BasicLogListDto & {
  reSend: {
    counts: number | null
    success: boolean
    timestamp: number
  }
  status: TotalMetersShadowDto['reported']
  success: boolean
  timestamp: number
}

export type EventLogListDto = BasicLogListDto & {
  start?: number
  end: number | null
  key: string | null
  result: boolean | null
  type: string | null
  value: number | null
}

export type AcStatusDto = {
  allRange: number | null
  allStatus: number | null
  classroomTemperature: number | null
  disconnect: number | null
  alive: number | null
  humidity: number | null
  onOff: number | null
  powerOff: number | null
  operationMax: number | null
  operationMin: number | null
  operationMode: number | null
  operationSupport: number | null
  remoteControl: number | null
  temperature: number | null
  temperatureMax: number | null
  temperatureMin: number | null
  windSpeed: number | null
  windSpeedMax: number | null
  windSpeedMin: number | null
}

export type MeterStatusDto = {
  alive: number | null
  cardBalance: number | null
  cardBalanceBak: number | null
  cardCategory: string
  cardCategoryBak: string
  cardExisted: number | null
  cardNumber: number | null
  cardNumberBak: number | null
  cardReaderConnect: number | null
  cardReaderMode: number | null
  cardReaderStatus: number | null
  cardReaderTotalDeduction: number | null
  chargeRate: number | null
  chargerate: string
  current: number | null
  demand: number | null
  disconnect: number | null
  fetchRawData: number | null
  fetchRawDataDate: number | null
  historyIndex: number | null
  historyIndexRead: number | null
  historyRecord: number | null
  insertCardEvent: number | null
  insufficientBalanceAlert: number | null
  onOff: number | null
  power: number | null
  powerOff: number | null
  readDefaultRelayStatus: number | null
  readScheduleCardReaderMode: number | null
  relayOffDelaySecond: number | null
  timeout: number | null
  timingRead: number | null
  totalPower: number | null
  totalWatt: number | null
  voltage: number | null
}

export type TotalMetersShadowDto = {
  reported: {
    ct: number | null //ct ratio
    current: number | null //電流
    currentA: number | null
    currentB: number | null
    currentC: number | null
    dateDateHour: number | null
    dateMinuteSecond: number | null
    dateYearMonth: number | null
    demand: number | null
    disconnect: number | null
    alive: number | null
    powerOff: number | null
    onOff: number | null
    fetchRawData: number | null
    fetchRawDataDate: number | null
    historyIndex: number | null
    historyIndexRead: number | null
    // historyRecord: {date: "22_03_04_14_30_00", voltage: "0x42e0a72e", current: "0x00000000", power: "0x00000000",…}
    offLoadingExceedAlertValue: number | null
    offLoadingExceedContractCapacity: number | null
    offLoadingRunPlans: number | null
    offLoadingRunRecoverPlans: number | null
    power: number | null
    powerA: number | null
    powerB: number | null
    powerC: number | null
    pt: number | null //PT ratio ?
    timeout: number | null
    timingRead: number | null
    totalPower: number | null // 功率
    totalWatt: number | null //
    voltage: number | null //電壓
    voltageA: number | null
    voltageAB: number | null
    voltageB: number | null
    voltageBC: number | null
    voltageC: number | null
    voltageCA: number | null
  }
  desired: {
    historyIndex: number | null
    historyIndexWrite: number | null
    timingRead: number | null
  }
  lastReportTimestamp: number | null
  lastCommandTimestamp: number | null
  timeoutCounts: number | null
  normal: boolean // 代表目前設備狀態
  alive: boolean // 代表設備是否有定時回報
}
