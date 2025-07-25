import { PolicyManualListData } from "../types";

/** Заглушка ожидания ответа сервера */
function randomDelay() {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Получение списка полисов */
async function getPolicyData(): Promise<PolicyManualListData> {
  await randomDelay();
  return {
    policy: "1234577RT",
    termPolicy: "",
    regionInc: "Москва",
    regionExc: "",
    insurer: "Иванов Иван Ивановичччччччччччччччччччччч",
    product: "Защита 1",
  };
}

/** Получить количество полисов*/
async function getCountManualPolicy() {
  return 3;
}

type SetPolicyDataCallback = () => PolicyManualListData;
/** Функция обратного вызова для сохранения введеных данных */
let setPolicyDataCallback: SetPolicyDataCallback | undefined;
function savePolicyDataCallback(callback: SetPolicyDataCallback) {
  setPolicyDataCallback = callback;
  (window as any)["setPolicyDataCallback"] = callback;
}

// Установка состояния "disabled"
type UpdateIsDisabledCallback = (isDisabled: boolean) => void;
let updateIsDisabledCallback: UpdateIsDisabledCallback | undefined;
/** Установить функцию обратьного вызова для получения значения (Является disabled) */
function setUpdateIsDisabledCallback(callback: UpdateIsDisabledCallback) {
  updateIsDisabledCallback = callback;
  (window as any)["updateIsDisabledCallback"] = callback;
}

// Обновление списка
type UpdatePolicyDataCallback = () => void;
let updatePolicyDataCallback: UpdatePolicyDataCallback | undefined;
function setUpdatePolicyDataCallback(callback: UpdatePolicyDataCallback) {
  updatePolicyDataCallback = callback;
  (window as any)["updatePolicyDataCallback"] = callback;
}

export default {
  getPolicyData,
  getCountManualPolicy,
  savePolicyDataCallback,
  setUpdateIsDisabledCallback,
  setUpdatePolicyDataCallback,
};
