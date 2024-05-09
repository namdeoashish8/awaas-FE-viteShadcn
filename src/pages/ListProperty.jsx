import { ValidateNotLoggedInUser } from "@/utility/protectRoutes";
import Container from "../components/ui/Container";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Button,
  InputLabel,
} from "@material-ui/core";
import { useRef, useState } from "react";

const ListProperty = () => {
  ValidateNotLoggedInUser();

  //Getting files
  const [files, setFiles] = useState(null);
  const [imagePaths, setImagePaths] = useState([]);

  //All input fields
  const title = useRef();
  const location = useRef();
  const price = useRef();
  const projectname = useRef();
  const listType = useRef();
  const carpet = useRef();
  const noOfFloors = useRef();
  const floornum = useRef();
  const maintenance = useRef();
  const listedBy = useRef();

  //All drop downs
  const [propertyType, setPropertyType] = useState("");
  const [noOfBedrooms, setNoOfBedrooms] = useState("");
  const [furnishType, setFurnishType] = useState("");
  const [bachelors, setBachelors] = useState("");
  const [parking, setParking] = useState("");
  const [houseDirection, setHouseDirection] = useState("");

  const handleChangeProp = (event) => {
    setPropertyType(event.target.value);
  };
  const handleChangeBeds = (event) => {
    setNoOfBedrooms(event.target.value);
  };
  const handleChangeFurnish = (event) => {
    setFurnishType(event.target.value);
  };
  const handleChangeBachelors = (event) => {
    setBachelors(event.target.value);
  };
  const handleChangeParking = (event) => {
    setParking(event.target.value);
  };
  const handleChangeDirection = (event) => {
    setHouseDirection(event.target.value);
  };

  const onImgChange = (event) => {
    if (event.target.files) {
      setFiles(event.target.files);
      let imagePathList = [];
      for (const file of event.target.files) {
        imagePathList.push(URL.createObjectURL(file));
      }
      setImagePaths(imagePathList);
    }
  };

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    console.log(
      listType,
      propertyType,
      furnishType,
      houseDirection,
      bachelors,
      noOfFloors,
      floornum,
      noOfBedrooms,
      parking,
      title,
      location,
      price,
      listedBy,
      maintenance,
      projectname,
      carpet
    );
    const imagePathList = imagePaths.map((imagePath) => imagePath);

    const cleanerObject={
      listType: listType.current,
      propertyType: propertyType.current,
      bachelors: bachelors.current,
      noOfFloors: noOfFloors.current,
      floornum: floornum.current,
      furnishType: furnishType.current,
      houseDirection: houseDirection.current,
      noOfBedrooms: noOfBedrooms.current,
      parking: parking.current,
      title: title.current.value,
      location: location.current.value,
      price: price.current.value,
      listedBy: listedBy.current.value,
      maintenance: maintenance.current.value,
      projectname: projectname.current.value,
      carpet: carpet.current.value,
      imgList: imagePathList,
    }
    //Api calls
    await fetch(`${import.meta.env.VITE_BASE_URL}/property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
 body: JSON.stringify(cleanerObject),
      credentials: "include", //sending the credentials
    });
  };

  return (
    <Container>
      <div className="container-md">
        <h1>List your Property</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="img-upload-div">
            <FormLabel className="upload-img" required>
              Upload Property images
            </FormLabel>
            <ImageGallery imgPaths={imagePaths} />
            <input
              type="file"
              accept="image/*"
              className="listPro-img-Input"
              onChange={onImgChange}
              multiple
            />
          </div>
          <RadioGroup
            className="purpose-radio"
            row
            onChange={(ev) => (listType.current = ev.target.value)}
          >
            <InputLabel>Chose the Listing type</InputLabel>
            <FormControlLabel value="RENT" control={<Radio />} label="Rent" />
            <FormControlLabel value="SELL" control={<Radio />} label="Sell" />
          </RadioGroup>
          <div className="descr-fields">
            <div className="descr-drpdowns">
              <div className="descr-drpdowns-1">
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    Property Type
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={propertyType}
                    label="Property-Type"
                    onChange={handleChangeProp}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"House"}>House</MenuItem>
                    <MenuItem value={"Apartment"}>Apartment</MenuItem>
                    <MenuItem value={"Condo"}>Condo</MenuItem>
                    <MenuItem value={"Villa"}>Villa</MenuItem>
                    <MenuItem value={"Rooms"}>Rooms</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    No. of Bedrooms
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={noOfBedrooms}
                    label="No"
                    onChange={handleChangeBeds}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    Furnishing type
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={furnishType}
                    label="Furnish-Type"
                    onChange={handleChangeFurnish}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"None"}>None</MenuItem>
                    <MenuItem value={"Semi Furnished"}>Semi Furnished</MenuItem>
                    <MenuItem value={"Fully Furnished"}>
                      Fully Furnished
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="descr-drpdowns-1">
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    Bachelors allowed ?
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={bachelors}
                    label="bachelors"
                    onChange={handleChangeBachelors}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"No, Family Only"}>
                      No, Family Only
                    </MenuItem>
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    Parking
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={parking}
                    label="Parking"
                    onChange={handleChangeParking}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Only 2 wheelers"}>
                      Only 2 wheelers
                    </MenuItem>
                    <MenuItem value={"Car Parking"}>Car Parking</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <FormLabel id="demo-simple-select-helper-label">
                    Facing Direction
                  </FormLabel>
                  <Select
                    autoWidth
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={houseDirection}
                    label="houseDirection"
                    onChange={handleChangeDirection}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"North"}>North</MenuItem>
                    <MenuItem value={"South"}>South</MenuItem>
                    <MenuItem value={"East"}>East</MenuItem>
                    <MenuItem value={"West"}>West</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="descr-input-1">
              <TextField
                id="outlined-search"
                type="search"
                label="Title"
                autoComplete="off"
                required
                inputRef={title}
              />
              <TextField
                id="outlined-search"
                type="search"
                variant="standard"
                label="Location"
                autoComplete="off"
                required
                inputRef={location}
              />
              <TextField
                id="outlined-search"
                type="number"
                variant="standard"
                label="Price"
                autoComplete="off"
                required
                inputRef={price}
              />
            </div>
            <div className="descr-input-2">
              <TextField
                id="outlined-search"
                type="search"
                variant="standard"
                label="Listed By"
                autoComplete="off"
                inputRef={listedBy}
                required
              />
              <TextField
                id="outlined-search"
                type="number"
                variant="standard"
                label="Carpet Area in sqft"
                autoComplete="off"
                required
                inputRef={carpet}
              />
              <TextField
                id="outlined-search"
                type="number"
                variant="standard"
                label="No. of floors"
                autoComplete="off"
                required
                inputRef={noOfFloors}
              />
            </div>
            <div className="descr-input-3">
              <TextField
                id="outlined-search"
                type="number"
                variant="standard"
                label="Floor Number"
                autoComplete="off"
                inputRef={floornum}
              />
              <TextField
                id="outlined-search"
                type="number"
                variant="standard"
                label="Maintenance (Monthly)"
                autoComplete="off"
                required
                inputRef={maintenance}
              />
              <TextField
                id="outlined-search"
                type="search"
                variant="standard"
                label="Project Name"
                autoComplete="off"
                inputRef={projectname}
              />
            </div>
          </div>
          <Button variant="outlined" size="medium" type="submit">
            Post
          </Button>
        </form>
      </div>
    </Container>
  );
};

function ImageGallery(imgPaths) {
  if (imgPaths && imgPaths.length > 0) {
    return (
      <div className="list-property-gallery">
        {imgPaths.map((imgPath) => {
          <div className="list-property-gallery-img">
            <img src={imgPath} alt="" />
          </div>;
        })}
      </div>
    );
  }
}


export default ListProperty;
