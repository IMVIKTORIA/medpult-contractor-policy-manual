import {
  ItemData,
  ItemDataString,
} from "../../UIKit/CustomList/CustomListTypes";

export class PolicyManualListData {
  /** Полис */
  policy?: string;
  /** Срок действия полиса */
  termPolicy?: string;
  /** Регион включения */
  regionInc?: string;
  /** Регион исключения */
  regionExc?: string;
  /** Страхователь */
  insurer?: string;
  /** Продукт */
  product?: string;

  constructor({
    policy,
    termPolicy,
    regionInc,
    regionExc,
    insurer,
    product,
  }: PolicyManualListData) {
    this.policy = policy;
    this.termPolicy = termPolicy;
    this.regionInc = regionInc;
    this.regionExc = regionExc;
    this.insurer = insurer;
    this.product = product;
  }
}

export interface FieldConfig {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  maskFunction?: (value: string) => string;
  disabled?: boolean;
  startDate?: string;
  setStartDate?: (value: string) => void;
  endDate?: string;
  setEndDate?: (value: string) => void;
}
