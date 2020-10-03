const express = require("express");
const router = express.Router();
const isAuth = require("../../Middleware/isAuth");
const {
  getAllData,
  save,
  hapusPelayanan,
  getDataById,
  editKoordinat,
  ubahPelayanan,
  getPelayananDariKecamatan,
  getPelayananByTypePelayanan,
  getDetailKecamatan,
  getAllKelurahan,
  getKelurahanDariKecamatan,
  getPelyananDariKelurahan,
  getPelayananDariKelurahanDanJenisPelayanan,
} = require("../Controllers//Pelayanan");

router.route("/").get(getAllData).post(isAuth, save);
router
  .route("/:id")
  .get(getDataById)
  .delete(isAuth, hapusPelayanan)
  .put(isAuth, ubahPelayanan)
  .patch(isAuth, editKoordinat);

router.route("/kelurahan").get(getAllKelurahan);
router.route("/kelurahan/:kecamatan_id").get(getKelurahanDariKecamatan);
router.route("/pelayanan/:kelurahan_id").get(getPelyananDariKelurahan);
router.route("/kecamatan/:id").get(getDetailKecamatan);
router.route("/pelayanan/jenis-pelayanan").get(getPelayananByTypePelayanan);
router.route("/pelayanan/:kecamatan_id").get(getPelayananDariKecamatan);
router
  .route("/pelayanan/kelurahan/jenis-pelayanaan")
  .get(getPelayananDariKelurahanDanJenisPelayanan);

module.exports = router;
