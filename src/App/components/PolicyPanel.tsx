import React, { useEffect, useState } from "react";
import Panel from "./Panel/Panel";
import { FieldConfig } from "../shared/types";
import PanelInput from "./Panel/PanelInput/PanelInput";
import PanelInputDate from "./Panel//PanelInputDate/PanellInputDate";
import Scripts from "../shared/utils/clientScripts";

/** Проект письма */
function PolicyPanel() {
  const [policy, setPolicy] = useState<string>("");
  const [termPolicy, setTermPolicy] = useState<string>("");
  const [termPolicyStart, setTermPolicyStart] = useState<string>("");
  const [termPolicyEnd, setTermPolicyEnd] = useState<string>("");
  const [regionInc, setRegionInc] = useState<string>("");
  const [regionExc, setRegionExc] = useState<string>("");
  const [insurer, setInsurer] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  const [initialPolicy, setInitialPolicy] = useState<boolean>(false);
  const [initialTermPolicy, setInitialTermPolicy] = useState<boolean>(false);
  const [initialRegionInc, setInitialRegionInc] = useState<boolean>(false);
  const [initialRegionExc, setInitialRegionExc] = useState<boolean>(false);
  const [initialInsurer, setInitialInsurer] = useState<boolean>(false);
  const [initialProduct, setInitialProduct] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  //количество полисов
  const [elementsCount, setElementsCount] = useState<number>(0);
  const fetchElementsCount = async () => {
    const count = await Scripts.getCountManualPolicy();
    setElementsCount(count);
  };

  const updatePolicyData = async () => {
    const data = await Scripts.getPolicyData();
    if (data) {
      setPolicy(data.policy || "");
      setInitialPolicy(!!data.policy);

      setTermPolicy(data.termPolicy || "");
      setInitialTermPolicy(!!data.termPolicy);

      setRegionInc(data.regionInc || "");
      setInitialRegionInc(!!data.regionInc);

      setRegionExc(data.regionExc || "");
      setInitialRegionExc(!!data.regionExc);

      setInsurer(data.insurer || "");
      setInitialInsurer(!!data.insurer);

      setProduct(data.product || "");
      setInitialProduct(!!data.product);
    }

    const count = await Scripts.getCountManualPolicy();
    setElementsCount(count);
  };
  useEffect(() => {
    updatePolicyData();
  }, []);

  const fields: FieldConfig[] = [
    {
      label: "Полис",
      value: policy,
      setValue: setPolicy,
      disabled: isDisabled || initialPolicy,
    },
    {
      label: "Срок действия полиса",
      value: termPolicy,
      setValue: setTermPolicy,
      disabled: isDisabled || initialTermPolicy,
      startDate: termPolicyStart,
      setStartDate: setTermPolicyStart,
      endDate: termPolicyEnd,
      setEndDate: setTermPolicyEnd,
    },
    {
      label: "Регион включения",
      value: regionInc,
      setValue: setRegionInc,
      disabled: isDisabled || initialRegionInc,
    },
    {
      label: "Регион исключения",
      value: regionExc,
      setValue: setRegionExc,
      disabled: isDisabled || initialRegionExc,
    },
    {
      label: "Страхователь",
      value: insurer,
      setValue: setInsurer,
      disabled: isDisabled || initialInsurer,
    },
    {
      label: "Продукт",
      value: product,
      setValue: setProduct,
      disabled: isDisabled || initialProduct,
    },
  ];

  //Сохранение введеных данных callback
  useEffect(() => {
    Scripts.savePolicyDataCallback(() => {
      const data = {
        policy,
        termPolicyStart,
        termPolicyEnd,
        regionInc,
        regionExc,
        insurer,
        product,
      };
      console.log(data);
      return data;
    });
  }, [
    policy,
    termPolicyStart,
    termPolicyEnd,
    regionInc,
    regionExc,
    insurer,
    product,
  ]);

  // Колбек заблокированности и обновления данныых
  React.useLayoutEffect(() => {
    Scripts.setUpdateIsDisabledCallback(setIsDisabled);
    Scripts.setUpdatePolicyDataCallback(updatePolicyData);
  }, []);

  return (
    <div>
      <Panel label={`Страховые полисы (${elementsCount})`} isOpen={false}>
        <div style={{ padding: "16px" }}>
          <PanelInput {...fields[0]} />
          <PanelInputDate {...fields[1]} />
          <PanelInput {...fields[2]} />
          <PanelInput {...fields[3]} />
          <PanelInput {...fields[4]} />
          <PanelInput {...fields[5]} />
        </div>
      </Panel>
    </div>
  );
}

export default PolicyPanel;
