import React from "react";
import { useHistory } from "react-router-dom";
import { Input, PrimaryButton } from "../../../common-components/ui";
import { routerConfig } from "../../../router/routerConfig";
import { SearchLocationState } from "../../../search/Search";

import styles from "./Search.module.css";

const ENTER_KEY = "Enter";

export const Search: React.FC = () => {
  const [value, setValue] = React.useState("");
  const { push } = useHistory<SearchLocationState>();

  const onFind = React.useCallback(() => {
    push({
      pathname: routerConfig.routes.search.path,
      state: {
        value,
      },
    });
  }, [push, value]);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation();
      if (event.key === ENTER_KEY) {
        onFind();
      }
    },
    [onFind],
  );

  return (
    <div className={styles.search}>
      <Input className={styles.input} value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <PrimaryButton onClick={onFind} disabled={!value}>
        Find
      </PrimaryButton>
    </div>
  );
};
