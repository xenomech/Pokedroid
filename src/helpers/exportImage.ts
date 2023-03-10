import { toPng } from "html-to-image";
import { Ref } from "react";
import FileSaver from "file-saver";
import toast from "react-hot-toast";
import axios from "axios";

export default async function exportToPng(
  element: Ref<HTMLDivElement> | any,
  name: string
) {
  try {
    toast("Preparing your Export", {
      icon: "⏳",
      position: "bottom-center",
    });

    var dim = { height: 1200, width: 1200 };
    if (element && element.current) {
      toPng(element?.current, {
        height: dim.height,
        width: dim.width,
        style: {
          transform: "scale(" + 1.5 + ")",
          transformOrigin: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        backgroundColor: "rgba(0,0,0,0)",
      }).then(async (data) => {
        toPng(element?.current, {
          height: dim.height,
          width: dim.width,
          style: {
            transform: "scale(" + 1.5 + ")",
            transformOrigin: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          backgroundColor: "rgba(0,0,0,0)",
        }).then(async (data) => {
          await axios.post(`/api/${name}`);
          toast.success("Export Successfull", {
            position: "bottom-center",
          });
          FileSaver.saveAs(
            data,
            `Poké-card-${name}-${new Date().toLocaleDateString()}.png`
          );
        });
      });
    }
  } catch (err) {
    toast.error("There Was an error exporting image Please Try again", {
      position: "bottom-center",
    });
  }
}
