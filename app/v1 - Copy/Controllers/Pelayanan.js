const {
  getPelayanan,
  getPelayananByKecamatan,
  getPelayananByType,
  savePelayanan,
  editPelayanan,
  deletePelayanan,
  editImage,
  deleteImage,
  getPelayananByName,
} = require("../Models/Pelayanan");
const {
  getJenisPelayanan,
  getKecamatan,
  getPelayananById,
  saveKoordinat,
  getKecamatanById,
  addKecamatan,
  editKecamatan,
  deleteKecamatan,
  getKelurahan,
  getKelurahanByKecamatan,
  getPelayananByKelurahan,
  getPelayananByKelurahanJenisPelayanan,
} = require("../Models/Wilayah");

const getAllData = async (req, res) => {
  try {
    const data = {};
    data.pelayanan = await getPelayanan();
    data.sarana = await getJenisPelayanan();
    data.kecamatan = await getKecamatan();
    data.kelurahan = await getKelurahan();
    const tagline = "hahaha";
    console.log(data);
    res.render("index", {
      data: data,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getPelayananById(id);
    res.render("pel_detail", { data: data });
  } catch (err) {}
};

const save = async (req, res) => {
  try {
    const {
      kelurahan_id,
      pelayanan_id,
      sarana_pelayanan,
      lat,
      long,
      ket,
    } = req.body;

    const pelayanan = await getPelayananByName(sarana_pelayanan);
    if (pelayanan.length) {
      res.status(400).json({
        success: false,
        error: `Data dengan nama ${sarana_pelayanan} sudah ada`,
      });
    }

    const data = await savePelayanan(
      kelurahan_id,
      pelayanan_id,
      sarana_pelayanan,
      lat,
      long,
      ket,
      ""
    );
    // if (err.length > 0) {
    //   res.status(500).json({
    //     success: false,
    //     error: err.sqlMessage,
    //   });
    // }
    if (data.affectedRows > 0) {
      res.status(200).json({
        success: true,
        msg: "Data Successfully Created",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const ubahPelayanan = async (req, res) => {
  try {
    const { kelurahan_id, pelayanan_id, sarana_pelayanan, ket } = req.body;
    const id = req.params.id;
    const data = await editPelayanan(
      id,
      kelurahan_id,
      pelayanan_id,
      sarana_pelayanan,
      ket
    );

    if (data) {
      res.status(200).json({
        success: true,
        msg: "data berhasil diubah",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const hapusPelayanan = async (req, res) => {
  try {
    const id = req.params.id;
    await deletePelayanan(id);
    res.status(200).json({
      success: true,
      msg: "data berhasil di hapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const editKoordinat = async (req, res) => {
  try {
    const { lat, long } = req.body;
    const id = req.params.id;
    const data = await saveKoordinat(id, lat, long);
    if (data.affectedRows > 0) {
      res.status(200).json({
        success: true,
        msg: "Koordinat berhasil diambahkan",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getPelayananDariKecamatan = async (req, res) => {
  try {
    const kecamatan_id = req.body.kecamatan_id;
    const data = {};
    data.pelayanan = await getPelayananByKecamatan(kecamatan_id);
    data.kecamatan = await getKecamatan();
    data.kelurahan = await getKelurahan();
    console.log(data);
    res.render("pel_kec", { data: { data } });
    // if (data.length > 0) {
    //   res.status(200).json({
    //     success: true,
    //     msg: "data berhasil didapatkan",
    //     data: data,
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getPelayananByTypePelayanan = async (req, res) => {
  try {
    const pelayanan_id = req.body.pelayanan_id;
    const data = await getPelayananByType(pelayanan_id);
    if (data.length > 0) {
      res.status(200).json({
        success: true,
        msg: "data berhasil didapatkan",
        data: data,
      });
    }

    res.status(404).json({
      success: true,
      data: "Not Found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getDetailKecamatan = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getKecamatanById(id);
    if (data.length > 0) {
      res.status(200).json({
        success: true,
        msg: "data berhasil didapatkan",
        data: data,
      });
    }

    res.status(404).json({
      success: true,
      msg: "Data Not Found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getAllKelurahan = async (req, res) => {
  try {
    const data = await getKelurahan();
    if (data.length > 0) {
      res.status(200).json({
        success: true,
        msg: "Data berhasil didapatkan",
        data: data,
      });
    }

    res.status(404).json({
      success: true,
      msg: "Not Found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getKelurahanDariKecamatan = async (req, res) => {
  try {
    const kecamatan_id = req.body.kecamatan_id;
    const data = await getKelurahanByKecamatan(kecamatan_id);
    res.render();

    res.status(404).json({
      success: true,
      msg: "Notfound",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getPelyananDariKelurahan = async (req, res) => {
  try {
    const kelurahan_id = req.body.kelurahan_id;
    const data = {};
    data.pelayanan = await getPelayananByKelurahan(kelurahan_id);
    data.kecamatan = await getKecamatan();
    data.kelurahan = await getKelurahan();

    res.render("pel_kec", { data: { data } });
    // if (data.length > 0) {
    // console.log(data);
    // res.status(200).json({
    //   success: true,
    //   msg: "Data berhasil didapatkan",
    //   data: data,
    // });
    // }

    // res.status(404).json({
    //   success: true,
    //   msg: "Notfound",
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const getPelayananDariKelurahanDanJenisPelayanan = async (req, res) => {
  try {
    const { kelurahan_id, pelayanan_id } = req.body;
    const data = await getPelayananByKelurahanJenisPelayanan(
      kelurahan_id,
      pelayanan_id
    );
    if (data.length > 0) {
      res.status(200).json({
        success: true,
        msg: "Data berhasil didapatkan",
        data: data,
      });
    }

    res.status(404).json({
      success: true,
      msg: "Notfound",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
module.exports = {
  getAllData,
  save,
  hapusPelayanan,
  ubahPelayanan,
  getDataById,
  editKoordinat,
  getPelayananDariKecamatan,
  getPelayananByTypePelayanan,
  getDetailKecamatan,
  getAllKelurahan,
  getKelurahanDariKecamatan,
  getPelyananDariKelurahan,
  getPelayananDariKelurahanDanJenisPelayanan,
};
