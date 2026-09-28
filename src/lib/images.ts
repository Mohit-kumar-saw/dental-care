/** Verified Unsplash URLs (all return HTTP 200) */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  hero: u("photo-1629909613654-28e377c37b09", 1920),
  heroAlt: u("photo-1606811841689-23dfddce3e95", 800),
  about: u("photo-1606811841689-23dfddce3e95", 900),
  parallax: u("photo-1609840114035-3c981b782dfe", 1920),
  clinic: u("photo-1519494026892-80bbd2d6fd0d", 900),
  gallery: [
    u("photo-1598256989800-fe5f95da9787", 600),
    u("photo-1629909613654-28e377c37b09", 600),
    u("photo-1588776814546-1ffcf47267a5", 600),
    u("photo-1519494026892-80bbd2d6fd0d", 600),
    u("photo-1609840114035-3c981b782dfe", 600),
    u("photo-1579684385127-1ef15d508118", 600),
  ],
  team: [
    u("photo-1612349317150-e413f6a5b16d", 400),
    u("photo-1559839734-2b71ea197ec2", 400),
    u("photo-1594824476967-48c8b964273f", 400),
  ],
};
