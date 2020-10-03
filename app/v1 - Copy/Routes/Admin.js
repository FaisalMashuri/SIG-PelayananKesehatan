const express = require("express");
const router = express.Router();

const {
  getAllData,
  getAllDataKelurahan,
  getAllDataKecamatan,
  hapusPelayanan,
  tampilanTambahData,
  save,
  tampilanUpdate,
  ubah,
  getAllUser,
  tambahUser,
  halamanTambahUser,
  halamanUbahPassword,
  ubahPassword,
  hapusUser,
} = require("../Controllers/Admin");

router.get("/", getAllData);
router.get("/kelurahan", getAllDataKelurahan);
router.get("/kecamatan", getAllDataKecamatan);
router.route("/pelayanan/:id").delete(hapusPelayanan).patch(ubah);

router.get("/pelayanan/tambah", tampilanTambahData);
router.get("/pelayanan/update/:id", tampilanUpdate);
router.post("/pelayanan", save);

router.get("/user", getAllUser);
router.get("/user/tambah", halamanTambahUser);
router.post("/user/tambah", tambahUser);
router.get("/user/update/:id", halamanUbahPassword);
router.put("/user/:id", ubahPassword);
router.delete("/user/:id", hapusUser);

module.exports = router;
