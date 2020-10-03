const db = require("../../../config/db");

const getKecamatan = () => {
  return new Promise((resolve) => {
    const sql = `SELECT *  FROM kecamatan ORDER BY kecamatan_id ASC`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getKecamatanById = (id) => {
  return new Promise((resolve) => {
    const sql = `SELECT * from kecamatan where id = ${id}`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const addKecamatan = (nama, kode_kecamatan, kode_pos) => {
  return new Promise((resolve) => {
    const sql = `INSERT INTO kecamatan (nama_kecamatan, kode_kecamatan,kode_pos) VALUES(${nama}, ${kode_kecamatan},${kode_pos})`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const editKecamatan = (id, nama, kode_kecamatan, kode_pos) => {
  return new Promise((resolve) => {
    const sql = `UPDATE kecamatan SET nama_kecamatan = '${nama}' ,kode_pos = '${kode_pos}', kode_kecamatan='${kode_kecamatan}' where id = ${id}`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const deleteKecamatan = (id) => {
  return new Promise((resolve) => {
    const sql = `DELETE FROM kecamatan WHERE id=${id}`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getKelurahan = () => {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM kelurahan ORDER by nama_kelurahan ASC`;

    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getKelurahanByKecamatan = (kecamatan_id) => {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM kelurahan WHERE kecamatan_id = ${kecamatan_id}`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getPelayananByKelurahan = (kelurahan_id) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan,d.koordinat_x as x,d.koordinat_y as y,p.icon as icon,k.nama_kelurahan,d.keterangan,d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE d.kelurahan_id = ${kelurahan_id} ORDER BY d.pelayanan_id,d.sarana_pelayanan ASC`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getPelayananByKelurahanJenisPelayanan = (kelurahan_id, pelayanan_id) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan,d.koordinat_x as x,d.koordinat_y as y,p.icon as icon,k.nama_kelurahan,d.keterangan,d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE d.kelurahan_id = ${kelurahan_id} AND p.pelayanan_id = ${pelayanan_id} ORDER BY d.pelayanan_id,d.sarana_pelayanan ASC`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getPelayananById = (id) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan,d.koordinat_x as x,d.koordinat_y as y,p.icon as icon,k.nama_kelurahan,d.keterangan,d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE d.distribusi_pelayanan_id = ${id} ORDER BY d.pelayanan_id,d.sarana_pelayanan ASC`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(res);
    });
  });
};

const getPelayananByKecamatan = (kecamatan_id) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan,d.koordinat_x as x,d.koordinat_y as y,p.icon as icon,k.nama_kelurahan,d.keterangan,d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE k.kecamatan_id = ${kecamatan_id} ORDER BY d.pelayanan_id,d.sarana_pelayanan ASC`;
    db.query(sql, (err, res) => {
      if (err) resolve(err);
      resolve(res);
    });
  });
};

const getPelayananByKecamatanJenisLayanan = (kecamatan_id, pelayanan_id) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan,d.koordinat_x as x,d.koordinat_y as y,p.icon as icon,k.nama_kelurahan,d.keterangan,d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE k.kecamatan_id = ${kecamatan_id} AND p.pelayanan_id = ${pelayanan_id} ORDER BY d.pelayanan_id,d.sarana_pelayanan ASC`;
    db.query(sql, (err, res) => {
      if (err) resolve(err);
      resolve(res);
    });
  });
};

const getJenisPelayanan = () => {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM pelayanan`;
    db.query(sql, (err, res) => {
      if (err) resolve(err);
      resolve(res);
    });
  });
};

const saveKoordinat = (id, lat, long) => {
  return new Promise((resolve) => {
    const sql = `UPDATE distribusi_pelayanan SET koordinat_x = "${lat}" , koordinat_y = "${long}" WHERE distribusi_pelayanan_id = ${id}`;
    db.query(sql, (err, res) => {
      if (err) resolve(err);
      resolve(res);
    });
  });
};
module.exports = {
  getKecamatan,
  getKecamatanById,
  addKecamatan,
  editKecamatan,
  deleteKecamatan,
  getKelurahan,
  getKelurahanByKecamatan,
  getPelayananByKelurahan,
  getPelayananByKelurahanJenisPelayanan,
  getPelayananById,
  getPelayananByKecamatan,
  getPelayananByKecamatanJenisLayanan,
  getJenisPelayanan,
  saveKoordinat,
};
