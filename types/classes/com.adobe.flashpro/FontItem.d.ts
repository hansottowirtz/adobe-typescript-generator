/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The FontItem object is a sub class of the Item Object. It 
		 * inherits all the Item properties.
		 */
		class FontItem extends Adobe.Flashpro.LibraryItem {
			/** Determines if the Font Item is bitmapped. */
			public bitmap: boolean;
			/** Determines if the Font Item is set to Bold. */
			public bold: boolean;
			/**
			 * Allows user to specify specific characters to embed. This 
			 * works just as if entering into the Font Embedding dialog.
			 */
			public embeddedCharacters: string;
			/**
			 * This is a property that can be modified or read from. It 
			 * consists of a series of delimited integers which correspond 
			 * to the items that can be selected in the Font Embedding 
			 * dialog. NOTE: the range numbers also correspond to the 
			 * FontEmbedding/UnicodeTables.xml file in the configurations 
			 * folder
			 */
			public embedRanges: string;
			/** Boolean flag to enable embedding variant glyphs. */
			public embedVariantGlyphs: boolean;
			/**
			 * Name of the device font that should be associated with this 
			 * Font Item.
			 */
			public font: string;
			/** Determines if the Font Item is set to Italic. */
			public italic: boolean;
			/** Number indicates the point size of the font. */
			public size: number;
		}
	}
}