import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Params = {
  serialNumber: string;
  mac: string;
};

type Props = {
  params: Params;
  openOrInstallApp(): void;
};

export const useCustomParams = (): Props => {
  const [params, setParams] = useState<Params>({
    serialNumber: "",
    mac: "",
  });

  const searchParams = useSearchParams();

  const openOrInstallApp = () => {
    if (screen.orientation.type.match(/portrait/i)) {
      console.log(params);
      if (params.serialNumber && params.mac) {
        location.href = `elpvocovo://newDevice?mac=${params.mac}&serialNumber=${params.serialNumber}`;
      } else {
        location.href = `elpvocovo://home`;
      }
    } else {
      toast.error("Please, try again on a mobile device", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (searchParams) {
      const serialNumber = searchParams.get("serialNumber") || "";
      const mac = searchParams.get("mac") || "";
      setParams({ serialNumber, mac });
    }
  }, [searchParams]);
  return {
    params,
    openOrInstallApp,
  };
};
