import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1680747717354 implements MigrationInterface {
  name = "Migration1680747717354";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."UserProfile_currency_enum" AS ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNH', 'CNY', 'COP', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."UserProfile_language_enum" AS ENUM('ab', 'aa', 'af', 'ak', 'sq', 'am', 'ar', 'an', 'hy', 'av', 'ae', 'ay', 'az', 'bm', 'ba', 'eu', 'be', 'bn', 'bh', 'bi', 'bs', 'br', 'bg', 'my', 'ca', 'km', 'ch', 'ce', 'zh', 'cv', 'kw', 'co', 'cr', 'hr', 'cs', 'da', 'dz', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'nl', 'fr', 'ff', 'gl', 'lg', 'ka', 'de', 'kl', 'gn', 'gu', 'ht', 'ha', 'he', 'hz', 'hi', 'ho', 'hu', 'io', 'ig', 'id', 'ia', 'ie', 'iu', 'ik', 'ga', 'it', 'ja', 'jv', 'kn', 'kr', 'ks', 'kk', 'ki', 'rw', 'kv', 'kg', 'ko', 'ku', 'kj', 'ky', 'lo', 'la', 'lv', 'li', 'ln', 'lt', 'lu', 'lb', 'mk', 'mg', 'ms', 'ml', 'dv', 'mt', 'gv', 'mi', 'mr', 'mh', 'mn', 'na', 'nv', 'ng', 'ne', 'se', 'no', 'ny', 'oc', 'oj', 'om', 'os', 'pi', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'ro', 'rm', 'rn', 'ru', 'sm', 'sg', 'sa', 'sc', 'gd', 'sr', 'sn', 'ii', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'ss', 'sv', 'tl', 'ty', 'tg', 'ta', 'tt', 'te', 'th', 'bo', 'ti', 'to', 'ts', 'tn', 'tr', 'tk', 'tw', 'uk', 'ur', 'ug', 'uz', 've', 'vi', 'vo', 'wa', 'cy', 'wo', 'xh', 'yi', 'yo', 'za', 'zu')`,
    );
    await queryRunner.query(
      `CREATE TABLE "UserProfile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "secondName" character varying(50), "secondLastName" character varying(50), "picture" character varying(100), "state" character varying(50), "city" character varying(50), "address" character varying(100), "zipCode" character varying(10), "country" character varying(50), "currency" "public"."UserProfile_currency_enum" NOT NULL DEFAULT 'COP', "language" "public"."UserProfile_language_enum" NOT NULL DEFAULT 'es', "cardLastFour" character varying(4), "cardToken" character varying(255), "walletBalance" double precision NOT NULL DEFAULT '0', "walletUsed" double precision NOT NULL DEFAULT '0', "preferredPaymentMethodId" character varying(50), "userId" uuid NOT NULL, CONSTRAINT "REL_0ea8af24543da734f41663014e" UNIQUE ("userId"), CONSTRAINT "PK_c8dbb59ce460203e06345766a8f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."User_phonecountrycode_enum" AS ENUM('AFG', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BRA', 'IOT', 'VGB', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'COL', 'COM', 'COK', 'CRI', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'COD', 'DNK', 'DJI', 'DMA', 'DOM', 'TLS', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'PYF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'CIV', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'XKX', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'ANT', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'PRK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'COG', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'KOR', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'VIR', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."User_phonecountryprefix_enum" AS ENUM('93', '355', '213', '1-684', '376', '244', '1-264', '672', '1-268', '54', '374', '297', '61', '43', '994', '1-242', '973', '880', '1-246', '375', '32', '501', '229', '1-441', '975', '591', '387', '267', '55', '246', '1-284', '673', '359', '226', '257', '855', '237', '238', '1-345', '236', '235', '56', '86', '57', '269', '682', '506', '385', '53', '599', '357', '420', '243', '45', '253', '1-767', '1-809, 1-829, 1-849', '670', '593', '20', '503', '240', '291', '372', '251', '500', '298', '679', '358', '33', '689', '241', '220', '995', '49', '233', '350', '30', '299', '1-473', '1-671', '502', '44-1481', '224', '245', '592', '509', '504', '852', '36', '354', '91', '62', '98', '964', '353', '44-1624', '972', '39', '225', '1-876', '81', '44-1534', '962', '254', '686', '383', '965', '996', '856', '371', '961', '266', '231', '218', '423', '370', '352', '853', '389', '261', '265', '60', '960', '223', '356', '692', '222', '230', '262', '52', '691', '373', '377', '976', '382', '1-664', '212', '258', '95', '264', '674', '977', '31', '687', '64', '505', '227', '234', '683', '850', '1-670', '47', '968', '92', '680', '970', '507', '675', '595', '51', '63', '48', '351', '1-787, 1-939', '974', '242', '40', '7', '250', '590', '290', '1-869', '1-758', '508', '1-784', '685', '378', '239', '966', '221', '381', '248', '232', '65', '1-721', '421', '386', '677', '252', '27', '82', '211', '34', '94', '249', '597', '268', '46', '41', '963', '886', '992', '255', '66', '228', '690', '676', '1-868', '216', '90', '993', '1-649', '688', '1-340', '256', '380', '971', '44', '1', '598', '998', '678', '379', '58', '84', '681', '967', '260', '263')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."User_status_enum" AS ENUM('ACTIVE', 'INACTIVE', 'PENDING', 'BANNED', 'DELETED')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."User_usertype_enum" AS ENUM('ADMIN', 'EATER', 'SHOP', 'DRIVER')`,
    );
    await queryRunner.query(
      `CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, "phoneNumber" character varying(10), "phoneCountryCode" "public"."User_phonecountrycode_enum" NOT NULL DEFAULT 'COL', "phoneCountryPrefix" "public"."User_phonecountryprefix_enum" NOT NULL DEFAULT '57', "lat" double precision, "lng" double precision, "status" "public"."User_status_enum" NOT NULL DEFAULT 'PENDING', "userType" "public"."User_usertype_enum" NOT NULL, "deletedAt" TIMESTAMP, "userTypeUpdatedAt" TIMESTAMP, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "UQ_a13c6507a7a6c7f80706217289b" UNIQUE ("phoneNumber", "phoneCountryPrefix"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."UserLogin_devicetype_enum" AS ENUM('ANDROID', 'IOS', 'WEB')`,
    );
    await queryRunner.query(
      `CREATE TABLE "UserLogin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "token" character varying NOT NULL, "deviceType" "public"."UserLogin_devicetype_enum", "deviceDetail" text, "deviceToken" character varying, "userId" uuid NOT NULL, CONSTRAINT "REL_71f93ddc09caa60f69c5f622c3" UNIQUE ("userId"), CONSTRAINT "PK_4b551ed62dd17218d6fb79fc6bd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserProfile" ADD CONSTRAINT "FK_0ea8af24543da734f41663014e3" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserLogin" ADD CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "UserLogin" DROP CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserProfile" DROP CONSTRAINT "FK_0ea8af24543da734f41663014e3"`,
    );
    await queryRunner.query(`DROP TABLE "UserLogin"`);
    await queryRunner.query(`DROP TYPE "public"."UserLogin_devicetype_enum"`);
    await queryRunner.query(`DROP TABLE "User"`);
    await queryRunner.query(`DROP TYPE "public"."User_usertype_enum"`);
    await queryRunner.query(`DROP TYPE "public"."User_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."User_phonecountryprefix_enum"`);
    await queryRunner.query(`DROP TYPE "public"."User_phonecountrycode_enum"`);
    await queryRunner.query(`DROP TABLE "UserProfile"`);
    await queryRunner.query(`DROP TYPE "public"."UserProfile_language_enum"`);
    await queryRunner.query(`DROP TYPE "public"."UserProfile_currency_enum"`);
  }
}
