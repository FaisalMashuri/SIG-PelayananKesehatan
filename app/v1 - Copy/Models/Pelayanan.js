const db = require("../../../config/db");

const getPelayanan = () => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan, p.icon as icon, d.keterangan,k.nama_kelurahan as kelurahan,ke.nama_kecamatan as kecamatan,ke.kecamatan_id,k.kelurahan_id,p.pelayanan_id,d.koordinat_x as x, d.koordinat_y as y, d.image FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id left join kecamatan ke on k.kecamatan_id = ke.kecamatan_id WHERE 1=1 ;`;
    db.query(sql, (err, result) => {
      if (err) {
        return err;
      }
      resolve(result);
    });
  });
};

const getPelayananByName = (nama) => {
  return new Promise((resolve) => {
    const sql = `SELECT * from distribusi_pelayanan where sarana_pelayanan = '${nama}'`;
    db.query(sql, (err, result) => {
      if (err) console.log(err);
      resolve(result);
    });
  });
};

const getPelayananByKecamatan = (kecamatan) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan, p.icon as icon, d.keterangan,k.nama_kelurahan as kelurahan,d.koordinat_x as x, d.koordinat_y as y FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE 1=1 AND d.koordinat_x != "" AND d.koordinat_y != "" and k.kecamatan_id = ${kecamatan}`;
    db.query(sql, (err, result) => {
      if (err) {
        return err;
      }
      resolve(result);
    });
  });
};

const getPelayananByType = (type) => {
  return new Promise((resolve) => {
    const sql = `SELECT d.distribusi_pelayanan_id as id, p.nama_layanan as jenis, d.sarana_pelayanan as pelayanan, p.icon as icon, d.keterangan,k.nama_kelurahan as kelurahan,d.koordinat_x as x, d.koordinat_y as y FROM distribusi_pelayanan d left join pelayanan p on p.pelayanan_id = d.pelayanan_id left join kelurahan k on k.kelurahan_id = d.kelurahan_id WHERE 1=1 AND d.koordinat_x != "" AND d.koordinat_y != "" and p.pelayanan_id = ${type} `;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve(result);
    });
  });
};

const savePelayanan = (
  kelurahan_id,
  pelayanan_id,
  nama,
  lat,
  long,
  ket,
  image
) => {
  return new Promise((resolve) => {
    const sql = `INSERT INTO distribusi_pelayanan (kelurahan_id,pelayanan_id,sarana_pelayanan,koordinat_x,koordinat_y,keterangan,image) VALUES(${kelurahan_id}, ${pelayanan_id}, '${nama}', '${lat}', '${long}', '${ket}', '${image}')`;
    db.query(sql, (err, res) => {
      if (err) console.log(err);
      resolve(res);
    });
  });
};

const editPelayanan = (id, nama, lat, long, ket) => {
  return new Promise((resolve) => {
    const sql = `UPDATE distribusi_pelayanan SET sarana_pelayanan="${nama}",keterangan="${ket}",koordinat_x="${lat}",koordinat_y="${long}" WHERE distribusi_pelayanan_id = ${id}`;
    db.query(sql, (err, res) => {
      if (err) console.log(err);
      resolve("Success");
    });
  });
};

const deletePelayanan = (id) => {
  return new Promise((resolve) => {
    const sql = `DELETE FROM distribusi_pelayanan WHERE distribusi_pelayanan_id = ${id}`;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve("Succes");
    });
  });
};

const editImage = (url, id) => {
  return new Promise((resolve) => {
    const sql = `UPDATE distribusi_pelayanan SET image= '${url}' WHERE distribusi_pelayanan_id = ${id} `;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve("image telah ditambahkan");
    });
  });
};

const deleteImage = (id) => {
  return new Promise((resolve) => {
    const sql = `UPDATE distribusi_pelayanan SET image= '' WHERE distribusi_pelayanan_id = ${id} `;
    db.query(sql, (err, res) => {
      if (err) return err;
      resolve("image telah ditambahkan");
    });
  });
};

module.exports = {
  getPelayanan,
  getPelayananByKecamatan,
  getPelayananByType,
  savePelayanan,
  editPelayanan,
  deletePelayanan,
  editImage,
  deleteImage,
  getPelayananByName,
};
