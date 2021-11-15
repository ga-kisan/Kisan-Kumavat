import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setEnglishLanguage,
  setHindiLanguage,
} from "../redux/actions/questions";

import { setUserData } from "../redux/actions/userData";
import { UserData, GlobalState } from "../types";

const UserForm = () => {
  const userData = useSelector((state: GlobalState) => state.userData);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    gender: "",
    language: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userData.name !== "" &&
      userData.language !== "" &&
      userData.gender !== ""
    ) {
      navigate("/questions");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUserData(formData));
    if (formData.language === "Hindi") {
      dispatch(setHindiLanguage());
    } else {
      dispatch(setEnglishLanguage());
    }
    navigate("/questions");
  };

  return (
    <Container
      sx={{
        width: 800,
        paddingY: "50px",
        border: "1px solid lightgray",
        marginTop: "100px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography data-testid="form-heading" align="center" variant="h3">
              Register Yourself
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup name="gender-radio-group">
                <FormControlLabel
                  value="Male"
                  control={
                    <Radio
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                  }
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={
                    <Radio
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={
                    <Radio
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                  }
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                required
                label="Language"
                value={formData.language}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    language: e.target.value,
                  })
                }
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
