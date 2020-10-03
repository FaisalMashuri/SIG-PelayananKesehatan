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

const {
  tambahAdmin,
  cekUser,
  getUser,
  getUserDetail,
  updatePassword,
  deleteUser,
} = require("../Models/Auth");
const bcrypt = require("bcrypt");

const getAllData = async (req, res) => {
  const data = {};
  data.pelayanan = await getPelayanan();
  data.kelurahan = await getKelurahan();
  data.kecamatan = await getKecamatan();

  res.render("admin/dashboard", { data: data });
};

const getAllDataKelurahan = async (req, res) => {
  const data = {};
  data.pelayanan = await getPelayanan();
  data.kecamatan = await getKecamatan();
  data.kelurahan = await getKelurahan();

  res.render("admin/kelurahan", { data: data });
};

const getAllDataKecamatan = async (req, res) => {
  const data = {};
  data.pelayanan = await getPelayanan();
  data.kecamatan = await getKecamatan();
  data.kelurahan = await getKelurahan();

  res.render("admin/kecamatan", { data: data });
};

const hapusPelayanan = async (req, res) => {
  await deletePelayanan(req.params.id);
  const data = {};
  data.pelayanan = await getPelayanan();
  data.kelurahan = await getKelurahan();
  data.kecamatan = await getKecamatan();
  res.status(302).redirect("/admin");
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
    if (pelayanan.length > 0) {
      res.status(302).redirect("/");
    }

    await savePelayanan(
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

    // req.flash("success", "Data berhasil ditambahkan");
    res.status(302).redirect("/admin");
    // if (data.affectedRows > 0) {
    //   res.status(200).json({
    //     success: true,
    //     msg: "Data Successfully Created",
    //   });
    // }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const tampilanTambahData = async (req, res) => {
  const data = {};
  data.pelayanan = await getPelayanan();
  data.jenisPelayanan = await getJenisPelayanan();
  data.kelurahan = await getKelurahan();
  data.kecamatan = await getKecamatan();
  res.render("admin/tambah", { data: data });
};

const tampilanUpdate = async (req, res) => {
  const data = {};
  data.pelayanan = await getPelayanan();
  data.jenisPelayanan = await getJenisPelayanan();
  data.kelurahan = await getKelurahan();
  data.kecamatan = await getKecamatan();
  data.detail = await getPelayananById(req.params.id);
  res.render("admin/update", { data: data });
};

const ubah = async (req, res) => {
  try {
    const id = req.params.id;
    const { sarana_pelayanan, lat, long, ket } = req.body;
    const pelayanan = await getPelayananByName(sarana_pelayanan);
    if (pelayanan.length > 0) {
      res.status(302).redirect("/");
    }
    await editPelayanan(id, sarana_pelayanan, lat, long, ket);
    res.status(302).redirect("/admin");
  } catch (err) {
    return err;
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = {};
    data.pelayanan = await getPelayanan();

    data.kelurahan = await getKelurahan();
    data.kecamatan = await getKecamatan();
    data.user = await getUser();
    res.render("admin/user", { data: data });
  } catch (err) {
    return err;
  }
};

const halamanTambahUser = async (req, res) => {
  try {
    const data = {};
    data.pelayanan = await getPelayanan();

    data.kelurahan = await getKelurahan();
    data.kecamatan = await getKecamatan();
    res.render("admin/tambahUser", { data: data });
  } catch (err) {
    return err;
  }
};

const tambahUser = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const data = {};
    data.pelayanan = await getPelayanan();
    data.kelurahan = await getKelurahan();
    data.kecamatan = await getKecamatan();
    const user = await cekUser(username);
    if (user.length > 0) {
      console.log("sudah ada");
      req.flash("err", "username sudah ada");
      res.status(302).redirect("/admin");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordBaru = await bcrypt.hash(password, salt);
    await tambahAdmin(username, passwordBaru, fullname);

    req.flash("success", "admin berhasil ditambahkan");
    res.status(302).redirect("/admin/user");
  } catch (err) {
    res.status(302).redirect("/admin/user/tambah");
    return err;
  }
};

const halamanUbahPassword = async (req, res) => {
  try {
    const id = req.params.id;

    const data = {};
    data.user = await getUserDetail(id);
    // console.log(user);
    data.pelayanan = await getPelayanan();
    data.kelurahan = await getKelurahan();
    data.kecamatan = await getKecamatan();
    // req.flash("success", "Password berhasil diubah");
    res.render("admin/updatePassword", { data: data });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const ubahPassword = async (req, res) => {
  const id = req.params.id;
  try {
    // const user = getUserDetail(id);
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordBaru = await bcrypt.hash(password, salt);

    await updatePassword(id, passwordBaru);
    req.flash("success", "Password berhasil ditambhakan");
    res.status(302).redirect("/admin/user");
  } catch (err) {
    res.status(302).redirect(`/admin/user/update/${id}`);
  }
};

const hapusUser = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    req.flash("success", "User berhasil dihapus");
    res.status(302).redirect("/admin/user");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAllData,
  getAllDataKelurahan,
  getAllDataKecamatan,
  hapusPelayanan,
  tampilanTambahData,
  save,
  tampilanUpdate,
  ubah,
  getAllUser,
  halamanTambahUser,
  tambahUser,
  halamanUbahPassword,
  ubahPassword,
  hapusUser,
};
