use cinema

db.movies.insertOne({ title: "Đèn đỏ ngã tư", genres: ["Hành động"], duration: 124 })
db.movies.insertOne({ title: "Bún chả cho người lạ", genres: ["Hài"], duration: 98 })

db.movies.find()
db.movies.find({ duration: { $gte: 100 } })
db.movies.find({ genres: { $in: ["Hài", "Hoạt hình"] } })

db.movies.updateOne({ title: "Đèn đỏ ngã tư" }, { $set: { isShowing: false } })

db.movies.deleteOne({ title: "Đèn đỏ ngã tư" })

db.movies.deleteMany({})
