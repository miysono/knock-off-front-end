import Navbar from "../../layout/Navbar";
import AccountSettingsItem from "./components/AccountSettingsItem";

const AccountSettings = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-20">
        <section className="container mt-16">
          <h1 className="text-4xl font-semibold">My account</h1>
          <p className="text-2xl font-semibold mt-4">Firstname, Lastname</p>
        </section>
        <section className="flex mt-16 gap-4 flex-shrink">
          <AccountSettingsItem
            title="Account details"
            description="View and edit your personal info"
            icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxklEQVR4nO2ZXahUVRSAjxr+JP0gKv7ciqAgFPxXTBQig6KSApmHuhfnztp7rXMVLyKiT8IlCP9ejCLyqZd6CCJ8CiLKh/SlQuilAgN/8F598DpnrXPvRUPyyNpzxubKOHfPzBmGgbNgw8zh7LX2t9fPXpsTBLnkkksuuXRDCoVkLhCfBOIbhiTprcFjBuWEMgT6o/sLam8AyfGgNz0hj4DwjaDbi8hqBN1eQA5CuUfk/zBAvmRIioN7bz9XLCbzieJXgORMb4UW8iWi8jP1ziRroxeB5LeeACmFsqfRAWtMeU1PgBjDL83ULRiSuDm9fB9QvgWMdls73qcndbEYPVuieLtBPm1IJjMH2RNOrZwZhO80ofMqIm92rRIKAPJ3gPKrITmnrZOGq26eQf4zU5BBijY0ggC49ZSvLiC5RjS5fDCUl4H478e8M2WtvKuFxZBEmYGUwtg0ArGW3/QNJ2tlqzG8yKBccYtGmTAoX2hFtCF/YDA+YlB+NyhCFC8G4qOZgVjLGxuDjPd5gpx1HiQ+mT67CDC1Qp9pSS8UkjkuTJH3p+/vLYXxqsxATMhbGoNE6zxBCkGQzEpbcalAJLOA5DNAvqceqeSbfJ6+/0nhYLIgMxAg/oto7Ml6ELqLBuUPP8+O9+ni3X+UT9NF73oYwhRvT5+dS3Plo/7h8aez84hTGr9fDwRRtvnqGB5O5lk7sdrps9yfhtGpaq5UNwtIrqdzdrlynCWIJme90x1IfvDV4ZK36hGKrZtvZVArU+2hCyhlg/LTyEgyG5C/zBbEhUa07pGwmtvM/BLyGyn8ZUD5UfMjSEXLsSH+UH/ruaUQmjOA/F/mIKWwvLYWZGQkeUJLqnd4In+VVq2hNAd+NiSHNKmBhF0BIPlYnwHy9zPpaxXka92lOqF13BdGd9fa6PVqpWp1Q03zIPwvoHxjwui1RuUXSF5VUEC+66E3MsRvVcp2vKNyFeDzgHxBbbmWheSfTEB0QUBybGhoYmnQhJRK8RKdNzOQepDP2jB+r7hvcpmGqJs7FK0HksPunMkAJAbiTUEbog2haz3aDB3TDggQDwcZCKAc6CoIUfn5TECg/EJXQUwPjaDbC8hBKPeI9H6OAMllbScGBm4uBIp2Vq+mnRjQoi0vkEpPVFNO1UCHQGyLtrxA9GZWq7zRTa3d0d+iLb/yG8rb03dJ3ukUiGnRVuDXlPFYrXLfRq61wc3bQh5N7xAexNOUdwpCWrKlXXb6VdddiB5LDsS/THM38oUOeuS8ty3kUYVwX3VzySWXoJE8AKCWGC93n7JyAAAAAElFTkSuQmCC"
          />
          <AccountSettingsItem
            title="Security"
            description="Change your password"
            icon="data:image/png;base64,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"
          />
        </section>
      </main>
    </>
  );
};

export default AccountSettings;
