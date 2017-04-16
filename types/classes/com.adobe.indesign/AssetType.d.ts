/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AssetType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The asset is cataloged as an EPS asset. */
			public static readonly EPS_TYPE: Adobe.Indesign.AssetType;
			/** Alias for EPS_TYPE. The asset is cataloged as an EPS asset. */
			public static readonly epsType: Adobe.Indesign.AssetType;
			/** The asset is cataloged as a geometric page item asset. */
			public static readonly GEOMETRY_TYPE: Adobe.Indesign.AssetType;
			/**
			 * Alias for GEOMETRY_TYPE. The asset is cataloged as a 
			 * geometric page item asset.
			 */
			public static readonly geometryType: Adobe.Indesign.AssetType;
			/** The asset is cataloged as an image asset. */
			public static readonly IMAGE_TYPE: Adobe.Indesign.AssetType;
			/**
			 * Alias for IMAGE_TYPE. The asset is cataloged as an image 
			 * asset.
			 */
			public static readonly imageType: Adobe.Indesign.AssetType;
			/** InDesign file asset */
			public static readonly INDESIGN_FILE_TYPE: Adobe.Indesign.AssetType;
			/** Alias for INDESIGN_FILE_TYPE. InDesign file asset */
			public static readonly indesignFileType: Adobe.Indesign.AssetType;
			/** The asset is cataloged as a page asset. */
			public static readonly PAGE_TYPE: Adobe.Indesign.AssetType;
			/**
			 * Alias for PAGE_TYPE. The asset is cataloged as a page asset.
			 */
			public static readonly pageType: Adobe.Indesign.AssetType;
			/** The asset is cataloged as a PDF asset. */
			public static readonly PDF_TYPE: Adobe.Indesign.AssetType;
			/** Alias for PDF_TYPE. The asset is cataloged as a PDF asset. */
			public static readonly pdfType: Adobe.Indesign.AssetType;
			/** Structure asset */
			public static readonly STRUCTURE_TYPE: Adobe.Indesign.AssetType;
			/** Alias for STRUCTURE_TYPE. Structure asset */
			public static readonly structureType: Adobe.Indesign.AssetType;
			/** The asset is cataloged as a text asset. */
			public static readonly TEXT_TYPE: Adobe.Indesign.AssetType;
			/**
			 * Alias for TEXT_TYPE. The asset is cataloged as a text asset.
			 */
			public static readonly textType: Adobe.Indesign.AssetType;
			/** Constructor */
			public constructor();
		}
	}
}