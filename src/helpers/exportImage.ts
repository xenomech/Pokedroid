import { toPng } from "html-to-image";
import FileSaver from "file-saver";
import { Ref } from "react";
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

    var dim =
      window.innerWidth > 760
        ? { height: 1200, width: 1200 }
        : { height: 760, width: 760 };
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
