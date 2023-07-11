import axios from "axios";

export const ApiService = {
  url: "http://localhost:5000/api/v1/",
  finalResponseData: {
    success: false,
    status: "",
    data: {},
  },

  get: async function (extraUrl: string): Promise<any> {
    const finalUrl = this.url + extraUrl.toString();
    await axios
      .get(finalUrl)
      .then((response) => {
        this.finalResponseData.success = true;
        this.finalResponseData.data = response.data;
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          this.finalResponseData.success = false;
        } else {
          this.finalResponseData.success = false;
          this.finalResponseData.status = error.response.status;
          this.finalResponseData.data = error.response.data;
        }
      });
    axios.defaults.headers.common = {};
    return this.finalResponseData;
  },

  post: async function (extraUrl: string, data?: any): Promise<any> {
    const finalUrl = this.url + extraUrl.toString();
    await axios
      .post(finalUrl, data)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          this.finalResponseData.success = true;
          this.finalResponseData.status = response.status.toString();
          this.finalResponseData.data = response.data;
        } else {
          this.finalResponseData.success = false;
          this.finalResponseData.status = response.status.toString();
          this.finalResponseData.data = response.data;
        }
      })
      .catch((err) => {
        this.finalResponseData.success = false;
        this.finalResponseData.status = err.response.status;
        this.finalResponseData.data = err.response.data;
      });
    axios.defaults.headers.common = {};
    return this.finalResponseData;
  },

  put: async function (extraUrl: string, data?: any) {
    const finalUrl = this.url + extraUrl.toString();
    axios
      .put(finalUrl, data)
      .then((responseData) => {
        this.finalResponseData.success = true;
        this.finalResponseData.data = responseData.data;
      })
      .catch(({ response }) => {
        this.finalResponseData.success = false;
        this.finalResponseData.data = response;
      });
    axios.defaults.headers.common = {};
    return this.finalResponseData;
  },

  patch: async function (extraUrl: string, data?: any) {
    const finalUrl = this.url + extraUrl.toString();
    await axios
      .patch(finalUrl, data)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          this.finalResponseData.success = true;
          this.finalResponseData.status = response.status.toString();
          this.finalResponseData.data = response.data;
        } else {
          this.finalResponseData.success = false;
          this.finalResponseData.status = response.status.toString();
          this.finalResponseData.data = response.data;
        }
      })
      .catch((err) => {
        this.finalResponseData.success = false;
        this.finalResponseData.status = err.status;
        this.finalResponseData.data = err.data;
      });

    axios.defaults.headers.common = {};
    return this.finalResponseData;
  },
  delete: async function (extraUrl: string, id = null) {
    const finalUrl = this.url + extraUrl.toString();
    // try {
    //   const response = await axios.delete(finalUrl);
    //   if (response) {
    //     this.finalResponseData.success = true;
    //     this.finalResponseData.data = response;
    //   }
    // } catch (err) {
    //   this.finalResponseData.success = false;
    //   this.finalResponseData.data = err;
    // }

    axios
      .delete(finalUrl)
      .then((responseData) => {
        this.finalResponseData.success = true;
        this.finalResponseData.data = responseData.data;
      })
      .catch(({ response }) => {
        this.finalResponseData.success = false;
        this.finalResponseData.data = response;
      });

    // axios.delete(finalUrl).then(response => {
    //   this.finalResponseData.success = true;
    //   this.finalResponseData.data = response.data;
    // }).catch(({ response }) => {
    //   this.finalResponseData.data = response;
    // });
    axios.defaults.headers.common = {};
    return this.finalResponseData;
  },

  addAuthorizationHeader: function () {
    const accessToken = localStorage.getItem("access_token");
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    return this;
  },
};
