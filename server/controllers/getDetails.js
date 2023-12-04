const User = require("../models/user.js");
const pumpOperator = require("../models/pumpOperator.js");
const waterQuality = require("../models/water_quality.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const setPumpOperatorDetails = async (req, res) => {
  console.log("1");
  try {
    // type morning or evening
    const { username, password, type, chlorineLevel } = req.body;
    const user = await User.findOne({ username });
    console.log("2");

    if (!user) {
      console.log("3");

      res.status(404).json({ message: "User not found" });
    } else {
      console.log("4");

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        console.log("5");

        res.status(400).json({ message: "Wrong password" });
      } else {
        console.log("------");
        const user = await pumpOperator.findOne({ username });
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const curDate = year + "/" + month + "/" + day;
        // const attendance = [];

        // console.log(attendence);
        if (!user) {
          console.log("12222");

          const newUser = new pumpOperator({ username });
          newUser.attendence.push({
            date: curDate,
            time: [dateObj.toLocaleTimeString()],
            chlorineLevel: [chlorineLevel],
          });
          // {
          //   username:'',
          //   attendence:[
          //     {
          //       date:"888",
          //       time:["aa","00"],
          //       chlorineLevel:[1,2]
          //     }
          //   ]
          // }
          // newUser.attendence.push([dateObj.toLocaleTimeString()]);
          // newUser.attendence.push([chlorineLevel]);
          await newUser.save();
          console.log(newUser);
        } else {
          const dayAttendence = user.attendence.find(
            (obj) => obj.date === curDate
          );
          if (!dayAttendence) {
            user.attendence.push([
              curDate,
              [dateObj.toLocaleTimeString()],
              [chlorineLevel],
            ]);
          } else {
            user.attendence.find((obj) => {
              if (obj.date === curDate) {
                if (type == "morning") {
                  obj.time[0] = dateObj.toLocaleTimeString();
                  obj.chlorineLevel[0] = chlorineLevel;
                } else {
                  obj.time[1] = dateObj.toLocaleTimeString();
                  obj.chlorineLevel[1] = chlorineLevel;
                }
                return obj;
              } else return obj;
            });
          }
          await user.save();
        }
        res.status(200).json({ message: "Details updated successfully" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const setWaterTeamDetails = async (req, res) => {
  try {
    const { username, password, waterQualityLevel, panchayatArea, schemeID } =
      req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: "Wrong password" });
      } else {
        console.log("hhh");
        const user = new waterQuality({
          username,
          waterQualityLevel,
          schemeID,
          panchayatArea,
          date: new Date(),
        });

        await user.save();
        console.log(user);
        res.status(200).json({ message: "Details added successfully" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { setPumpOperatorDetails, setWaterTeamDetails };
