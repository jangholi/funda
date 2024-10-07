export type PropertyDetails = Partial<{
  /** Offered Since */
  'AangebodenSinds': string
  /** Offered Since Text */
  'AangebodenSindsTekst': string
  /** Number of Bathrooms */
  'AantalBadkamers': number
  /** Number of Rooms */
  'AantalKamers': number
  /** Number of Bedrooms */
  'AantalSlaapkamers': number
  /** Number of Living Floors */
  'AantalWoonlagen': string
  /** Acceptance */
  'Aanvaarding': string
  /** Address */
  'Adres': string
  /** Paid Off Date */
  'AfgekochtDatum': unknown
  /** Balcony Terrace */
  'BalkonDakterras': string
  /** Business Space Combination Object */
  'BedrijfsruimteCombinatieObject': unknown
  /** Viewing Time Slots */
  'BezichtingDagdelen': Array<{
    /** Name */
    Naam: string
    /** Value */
    Waarde: string
  }>
  /** Viewing Days */
  'BezichtingDagen': Array<{
    /** Name */
    Naam: string
    /** Value */
    Waarde: string
  }>
  /** Contribution to VVE */
  'BijdrageVVE': unknown
  /** Special Features */
  'Bijzonderheden': unknown
  /** Year of Construction */
  'Bouwjaar': string
  /** Construction Type */
  'Bouwvorm': string
  /** Source Code */
  'BronCode': string
  /** Contact Person Email */
  'ContactpersoonEmail': unknown
  /** Contact Person Phone */
  'ContactpersoonTelefoon': unknown
  /** Central Heating */
  'Cv': string
  /** Signing Date of Deed */
  'DatumOndertekeningAkte': unknown
  /** Deeplink */
  'Deeplink': unknown
  /** Detail Information */
  'DetailInfo': {
    /** Has Promotion Label */
    HasPromotionLabel: boolean
    /** Promotion Label Type */
    PromotionLabelType: number
    /** Ribbon Color */
    RibbonColor: number
    /** Ribbon Text */
    RibbonText: unknown
    /** Tagline */
    Tagline: string
  }
  /** Ownership Situation */
  'EigendomsSituatie': unknown
  /** Energy Label */
  'Energielabel': {
    /** Definitive */
    Definitief: boolean
    /** Index */
    Index: unknown
    /** Label */
    Label: string
    /** Not Available */
    NietBeschikbaar: boolean
    /** Not Required */
    NietVerplicht: boolean
  }
  /** Leasehold Amount */
  'ErfpachtBedrag': unknown
  /** Garage */
  'Garage': string
  /** Garage Insulation */
  'GarageIsolatie': unknown
  /** Garage Amenities */
  'GarageVoorzieningen': string
  /** Located On */
  'GelegenOp': unknown
  /** Modified Date */
  'GewijzigdDatum': string
  /** Main Photo */
  'HoofdFoto': string
  /** Main Photo Secure */
  'HoofdFotoSecure': string
  /** Main Garden Type */
  'HoofdTuinType': string
  /** ID */
  'Id': number
  /** Basic Placement Indicator */
  'IndBasisPlaatsing': boolean
  /** Photos Indicator */
  'IndFotos': boolean
  /** iPix Indicator */
  'IndIpix': boolean
  /** Open House Topper Indicator */
  'IndOpenhuizenTopper': boolean
  /** PDF Indicator */
  'IndPDF': boolean
  /** Floorplan Indicator */
  'IndPlattegrond': boolean
  /** Top Indicator */
  'IndTop': boolean
  /** Auction Product Indicator */
  'IndVeilingProduct': boolean
  /** Video Indicator */
  'IndVideo': boolean
  /** Volume */
  'Inhoud': number
  /** Internal ID */
  'InternalId': string
  /** Withdrawn Indicator */
  'IsIngetrokken': boolean
  /** Rented Indicator */
  'IsVerhuurd': boolean
  /** Sold Indicator */
  'IsVerkocht': boolean
  /** Insulation */
  'Isolatie': string
  /** Features */
  'Kenmerken': Array<{
    /** Ad */
    Ad: unknown
    /** Features */
    Kenmerken: Array<{
      /** Name */
      Naam: string
      /** Name CSS */
      NaamCss: string
      /** Value */
      Waarde: string
      /** Value CSS */
      WaardeCss: null
    }>
  }>
  /** Short Features */
  'KenmerkenKort': {
    /** Ad */
    Ad: unknown
    /** Features */
    Kenmerken: Array<{
      /** Name */
      Naam: string
      /** Name CSS */
      NaamCss: null
      /** Value */
      Waarde: string
      /** Value CSS */
      WaardeCss: null
    }>
    /** Location Number */
    LokNummer: number
    /** Sub Feature */
    SubKenmerk: unknown
    /** Title */
    Titel: unknown
  }
  /** Features Title */
  'KenmerkenTitel': unknown
  /** Location */
  'Ligging': string
  /** MLI URL */
  'MLIUrl': string
  /** Realtor */
  'Makelaar': string
  /** Realtor ID */
  'MakelaarId': number
  /** Realtor Phone */
  'MakelaarTelefoon': string
  /** Co-Sellers */
  'MedeAanbieders': Array<unknown>
  /** Media */
  'Media': Array<{
    /** Category */
    Categorie: number
    /** Content Type */
    ContentType: number
    /** ID */
    Id: string
    /** Index Number */
    IndexNumber: number
    /** Media Items */
    MediaItems: Array<{
      /** Category */
      Category: number
      /** Height */
      Height: number
      /** URL */
      Url: string
      /** Secure URL */
      UrlSecure: string
      /** Width */
      Width: number
    }>
    /** Metadata */
    Metadata: null
    /** Description */
    Omschrijving: null
    /** Registration Required */
    RegistratieVerplicht: false
    /** Type */
    Soort: 3
  }>
  /** Media Photo */
  'Media-Foto': Array<string>
  /** Mobile URL */
  'MobileURL': string
  /** Object Type */
  'ObjectType': string
  /** Object Type With Prefix */
  'ObjectTypeMetVoorvoegsel': string
  /** Open Houses */
  'OpenHuizen': Array<unknown>
  /** Plot Area */
  'PerceelOppervlakte': number
  /** Permanent Residence */
  'PermanenteBewoning': string
  /** Place */
  'Plaats': string
  /** Postal Code */
  'Postcode': string
  /** Price */
  'Prijs': {
    /** No Extra Costs */
    GeenExtraKosten: unknown
    /** Rent Abbreviation */
    HuurAbbreviation: string
    /** Rent Price */
    Huurprijs: unknown
    /** Rent Price On Request */
    HuurprijsOpAanvraag: string
    /** Rent Price To */
    HuurprijsTot: unknown
    /** Purchase Abbreviation */
    KoopAbbreviation: string
    /** Purchase Price */
    Koopprijs: number
    /** Purchase Price On Request */
    KoopprijsOpAanvraag: string
    /** Purchase Price To */
    KoopprijsTot: unknown
    /** Original Price */
    OriginelePrijs: unknown
    /** Auction Text */
    VeilingText: string
  }
  /** Price Formatted */
  'PrijsGeformatteerd': string
  /** Project */
  'Project': unknown
  /** Project Name */
  'ProjectNaam': unknown
  /** Publication Date */
  'PublicatieDatum': string
  /** Publication Status */
  'PublicatieStatus': number
  /** Shed/Storage */
  'SchuurBerging': string
  /** Shed/Storage Insulation */
  'SchuurBergingIsolatie': unknown
  /** Shed/Storage Amenities */
  'SchuurBergingVoorzieningen': string
  /** Scrambled ID */
  'ScrambledId': string
  /** Service Costs */
  'ServiceKosten': number
  /** Type of Offer */
  'SoortAanbod': number
  /** Type of Roof */
  'SoortDak': string
  /** Type of Garage */
  'SoortGarage': string
  /** Type of Parking */
  'SoortParkeergelegenheid': string
  /** Type of Placement */
  'SoortPlaatsing': number
  /** Type of House */
  'SoortWoning': string
  /** Titles */
  'Titels': Array<{
    /** Description */
    Omschrijving: string
    /** Page */
    Pagina: number
  }>
  /** Show Make Viewing */
  'ToonBezichtigingMaken': boolean
  /** Show Brochure Request */
  'ToonBrochureAanvraag': boolean
  /** Show Realtor Property Offer */
  'ToonMakelaarWoningaanbod': boolean
  /** Show Respond */
  'ToonReageren': boolean
  /** Transaction Withdrawal Date */
  'TransactieAfmeldDatum': unknown
  /** Transaction Realtor ID */
  'TransactieMakelaarId': unknown
  /** Transaction Realtor Name */
  'TransactieMakelaarNaam': unknown
  /** Garden Location */
  'TuinLigging': string
  /** Project Type */
  'TypeProject': number
  /** URL */
  'URL': string
  /** Auction */
  'Veiling': {
    /** End Date */
    EindDatum: unknown
    /** Link */
    Link: unknown
    /** Start Date */
    StartDatum: unknown
    /** Auction Party */
    VeilingPartij: unknown
  }
  /** Sales Status */
  'VerkoopStatus': string
  /** Heating */
  'Verwarming': string
  /** Video */
  'Video': unknown
  /** Full Description */
  'VolledigeOmschrijving': string
  /** Amenities */
  'Voorzieningen': string
  /** WGS84 X Coordinate */
  'WGS84_X': number
  /** WGS84 Y Coordinate */
  'WGS84_Y': number
  /** Hot Water */
  'WarmWater': string
  /** Living Area */
  'WoonOppervlakte': number
  /** First Rent Price */
  'EersteHuurPrijs': unknown
  /** First Rent Price Long */
  'EersteHuurPrijsLang': unknown
  /** First Purchase Price */
  'EersteKoopPrijs': unknown
  /** First Purchase Price Long */
  'EersteKoopPrijsLang': unknown
  /** Rent Price */
  'HuurPrijs': unknown
  /** Rent Price Long */
  'HuurPrijsLang': unknown
  /** Rent Price To */
  'HuurPrijsTot': unknown
  /** Rent Price */
  'Huurprijs': unknown
  /** Rent Price Format */
  'HuurprijsFormaat': unknown
  /** Purchase Price */
  'KoopPrijs': number
  /** Purchase Price Long */
  'KoopPrijsLang': string
  /** Purchase Price */
  'Koopprijs': number
  /** Purchase Price Format */
  'KoopprijsFormaat': string
  /** Purchase Price To */
  'KoopprijsTot': unknown
  /** Short URL */
  'ShortURL': string
  /** Garden */
  'Tuin': string
  /** Auction Formatted */
  'VeilingGeformatteerd': unknown
}>
