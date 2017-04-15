/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, moves wrapped text to the next available leading 
			 * increment below the text wrap objects (skip by leading).
			 */
			public abutTextToTextWrap: boolean;
			/**
			 * Specifies where to insert new pages in response to overset 
			 * text.
			 */
			public addPages: Adobe.Incopy.AddPageOptions;
			/**
			 * The amount that the baseline shift increases each time the 
			 * user presses the option/alt-shift-up arrow keys or decreases 
			 * each time the user presses the option/alt-shift-down arrow 
			 * keys. (Range: .001 to 100)
			 */
			public baselineShiftKeyIncrement: any;
			/**
			 * Enable auto-deletion of pages containing empty threaded text 
			 * frames.
			 */
			public deleteEmptyPages: boolean;
			/**
			 * If true, highlights character and paragraph styles with 
			 * colored backgrounds.
			 */
			public enableStylePreviewMode: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, highlights custom kerned or tracked characters. */
			public highlightCustomSpacing: boolean;
			/**
			 * If true, highlights hyphenation and justification rule 
			 * violations in the text.
			 */
			public highlightHjViolations: boolean;
			/** If true, highlights paragraphs that violate keep options. */
			public highlightKeeps: boolean;
			/** If true, uses on-screen highlighting to identify kinsoku. */
			public highlightKinsoku: boolean;
			/** If true, highlights missing fonts. */
			public highlightSubstitutedFonts: boolean;
			/** If true, highlights substituted glyphs. */
			public highlightSubstitutedGlyphs: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** If true, justifies text around text wrap objects. */
			public justifyTextWraps: boolean;
			/**
			 * The amount the kerning value per 1000 ems increases each 
			 * time the user presses of the option/alt-right arrow keys or 
			 * decreases each time the user presses the option/alt-left 
			 * arrow keys. (Range: 1 to 100)
			 */
			public kerningKeyIncrement: number;
			/**
			 * The amount that leading increases each time the user presses 
			 * the option/alt-up arrow keys or decreases each time the user 
			 * presses the option/alt-down arrow keys. (Range: .001 to 100)
			 */
			public leadingKeyIncrement: any;
			/**
			 * Restrict the adding of pages during smart text reflow to 
			 * overridden master text frames.
			 */
			public limitToMasterTextFrames: boolean;
			/**
			 * If true, links placed text files and spreadsheet files. If 
			 * false, embeds the files.
			 */
			public linkTextFilesWhenImporting: boolean;
			/**
			 * The parent of the TextPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * Preserve left-hand and right-and pages when facing pages are 
			 * enabled during smart text reflow.
			 */
			public preserveFacingPageSpreads: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, shows hidden characters. */
			public showInvisibles: boolean;
			/**
			 * The size of text formatted as small caps, specified as a 
			 * percentage of the font size. (Range: 1 to 200)
			 */
			public smallCap: number;
			/**
			 * If true, enable automatic adding and deleting of pages in 
			 * response to text reflow.
			 */
			public smartTextReflow: boolean;
			/**
			 * The position of subscript characters, specified as a 
			 * percentage of the regular leading. (Range: -500 to 500)
			 */
			public subscriptPosition: number;
			/**
			 * The size of subscript characters, specified as a percentage 
			 * of the font size. (Range: 0 to 200)
			 */
			public subscriptSize: number;
			/**
			 * The position of superscript characters, specified as a 
			 * percentage of the regular leading. (Range: -500 to 500)
			 */
			public superscriptPosition: number;
			/**
			 * The size of superscript characters, specified as a 
			 * percentage of the font size. (Range: 0 to 200)
			 */
			public superscriptSize: number;
			/** If true, converts straight quotes to typographic quotes. */
			public typographersQuotes: boolean;
			/**
			 * If true, uses the glyph CID to get the mojikumi class of the 
			 * character.
			 */
			public useCidMojikumi: boolean;
			/**
			 * If true, reverses X and Y scaling on Roman characters in 
			 * vertical text.
			 */
			public useNewVerticalScaling: boolean;
			/** If true, automatically selects the correct optical size. */
			public useOpticalSize: boolean;
			/**
			 * If true, applies the leading changes made to a text range to 
			 * the entire paragraph. If false, applies leading changes only 
			 * to the text range.
			 */
			public useParagraphLeading: boolean;
			/**
			 * If true, text wrap does not affect text on layers above the 
			 * layer that contains the text wrap object. If false, text 
			 * wrap affects text on all visible layers.
			 */
			public zOrderTextWrap: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}