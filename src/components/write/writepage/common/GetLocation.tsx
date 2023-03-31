import { usePopup } from "@/utils/usePopup";
import { FieldValues, UseFormRegister } from "react-hook-form";
import MapSearch from "./MapSearch";
import { useRef, useState } from "react";

interface GetLocationProps {
  register: UseFormRegister<FieldValues>;
  locations: string[];
  setLocations: Function;
}

const GetLocation = (props: GetLocationProps) => {
  const { locations, setLocations } = props;
  const { component, openPopup, closePopup, isOpen } = usePopup();

  const openMapHandler = () => {
    openPopup(
      <MapSearch
        closePopup={closePopup}
        locations={locations}
        setLocations={setLocations}
      />
    );
  };

  const deleteLocation = (id: number) => {
    setLocations((prev: string) => {
      const newLocations = locations.filter((v, i) => {
        return i !== id;
      });
      return newLocations;
    });
  };

  return (
    <>
      {component}
      <button
        onClick={() => {
          console.log(locations);
        }}
      >
        hi
      </button>
      <button
        className="form-input"
        onClick={() => {
          openMapHandler();
        }}
      >
        거래 희망 장소 선택하기
      </button>
      {/* <textarea placeholder="거래 희망 장소" className="form-input h-[150px]" /> */}
      <div
        placeholder="선택한 거래 희망 장소들"
        className="form-input2 h-[150px]"
      >
        {locations
          ? locations.map((v, i) => {
              return (
                <div
                  key={i}
                  className="m-[3px]"
                  onClick={() => {
                    deleteLocation(i);
                  }}
                >
                  {v}
                </div>
              );
            })
          : "선택한 거래 희망 장소들"}
      </div>
    </>
  );
};

export default GetLocation;
