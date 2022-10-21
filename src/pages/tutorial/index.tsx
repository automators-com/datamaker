import type { NextPage } from "next";
import Layout from "../../components/layout";

const Tutorial: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="w-full p-10">
          <form className="w-full shadow-lg">
            <div className="flex h-fit content-center items-center justify-between gap-3 border-b-2 bg-gray-50 p-7 font-sans">
              <h1 className="h-fit text-lg font-medium text-automatorsPurple">
                New Template
              </h1>
              <div className="flex h-fit flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-8 w-24 items-center rounded-md  bg-automatorsPurple text-center font-sans text-sm text-white hover:bg-automatorsPurpleHover"
                >
                  <svg
                    className="ml-4 mr-2 h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Import
                </button>
                <a className="h-8 border-r-2 border-gray-300" />
                <button
                  type="button"
                  className="inline-flex h-8 w-28 items-center rounded-md border-2 border-automatorsBlue bg-white text-center font-sans text-sm text-automatorsBlue hover:bg-automatorsPurpleLightHover"
                >
                  <svg
                    className="ml-4 mr-2 h-4 w-4 text-automatorsBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  Discard
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-20 items-center rounded-md bg-automatorsTourquoise text-center font-sans text-sm text-white hover:bg-automatorsTourquoiseHover"
                >
                  <svg
                    className="ml-3 mr-2 h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    ></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
            <div className="m-7 flex h-80 bg-white">
              <h1>...</h1>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Tutorial;
