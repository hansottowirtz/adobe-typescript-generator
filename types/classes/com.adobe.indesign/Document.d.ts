/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Document extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, uses LAB alternates for spot colors when available.
			 * @type {boolean}
			 */
			public accurateLABSpots: boolean;
			/**
			 * The active layer. Can also accept: String.
			 * @type {Adobe.Indesign.Layer}
			 */
			public activeLayer: Adobe.Indesign.Layer;
			/**
			 * The active preflight process for this document.
			 * @type {Adobe.Indesign.PreflightProcess}
			 * @readonly
			 */
			public readonly activeProcess: Adobe.Indesign.PreflightProcess;
			/**
			 * Dispatched after the Document becomes active. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched after a Document is exported. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_EXPORT: string;
			/**
			 * Dispatched after importing a file into a Document. This 
			 * event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_IMPORT: string;
			/**
			 * Dispatched after one or more links in the Document have been 
			 * added, deleted, or modified. This event bubbles. This event 
			 * is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_LINKS_CHANGED: string;
			/**
			 * Dispatched after a Document is created. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Document is opened. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after a Document is printed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PRINT: string;
			/**
			 * Dispatched after a Document is reverted. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_REVERT: string;
			/**
			 * Dispatched after a Document is saved. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SAVE: string;
			/**
			 * Dispatched after a copy of a Document is saved. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SAVE_A_COPY: string;
			/**
			 * Dispatched after a Document is saved under a new name. This 
			 * event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SAVE_AS: string;
			/**
			 * The rendering intent for colors that result from 
			 * transparency interactions on the page after blending.
			 * @type {Adobe.Indesign.RenderingIntent}
			 */
			public afterBlendingIntent: Adobe.Indesign.RenderingIntent;
			/**
			 * All Cell styles
			 * @type {any}
			 * @readonly
			 */
			public readonly allCellStyles: any;
			/**
			 * Lists all character styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allCharacterStyles: any;
			/**
			 * Lists all graphics contained by the Document.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * All object styles contained by the Document.
			 * @type {any}
			 * @readonly
			 */
			public readonly allObjectStyles: any;
			/**
			 * Lists all page items contained by the Document.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * Lists all paragraph styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allParagraphStyles: any;
			/**
			 * All Table styles
			 * @type {any}
			 * @readonly
			 */
			public readonly allTableStyles: any;
			/**
			 * Anchored object default settings.
			 * @type {Adobe.Indesign.AnchoredObjectDefault}
			 * @readonly
			 */
			public readonly anchoredObjectDefaults: Adobe.Indesign.AnchoredObjectDefault;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Indesign.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/**
			 * A collection of articles.
			 * @type {Adobe.Indesign.Articles}
			 * @readonly
			 */
			public readonly articles: Adobe.Indesign.Articles;
			/**
			 * A collection of assignments.
			 * @type {Adobe.Indesign.Assignments}
			 * @readonly
			 */
			public readonly assignments: Adobe.Indesign.Assignments;
			/**
			 * The XML element associated with the Document.
			 * @type {Adobe.Indesign.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Indesign.XMLItem;
			/**
			 * Baseline frame grid option settings.
			 * @type {Adobe.Indesign.BaselineFrameGridOption}
			 * @readonly
			 */
			public readonly baselineFrameGridOptions: Adobe.Indesign.BaselineFrameGridOption;
			/**
			 * Dispatched before a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the Document becomes inactive. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Document is exported. This event 
			 * bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_EXPORT: string;
			/**
			 * Dispatched before importing a file into a Document. This 
			 * event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_IMPORT: string;
			/**
			 * Dispatched before a Document is printed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PRINT: string;
			/**
			 * Dispatched before a Document is reverted. This event 
			 * bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_REVERT: string;
			/**
			 * Dispatched before a Document is saved. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_SAVE: string;
			/**
			 * Dispatched before a copy of a Document is saved. This event 
			 * bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_SAVE_A_COPY: string;
			/**
			 * Dispatched before a Document is saved under a new name. This 
			 * event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_SAVE_AS: string;
			/**
			 * A collection of bookmarks.
			 * @type {Adobe.Indesign.Bookmarks}
			 * @readonly
			 */
			public readonly bookmarks: Adobe.Indesign.Bookmarks;
			/**
			 * Button preference settings.
			 * @type {Adobe.Indesign.ButtonPreference}
			 * @readonly
			 */
			public readonly buttonPreferences: Adobe.Indesign.ButtonPreference;
			/**
			 * A collection of buttons.
			 * @type {Adobe.Indesign.Buttons}
			 * @readonly
			 */
			public readonly buttons: Adobe.Indesign.Buttons;
			/**
			 * A collection of cell style groups.
			 * @type {Adobe.Indesign.CellStyleGroups}
			 * @readonly
			 */
			public readonly cellStyleGroups: Adobe.Indesign.CellStyleGroups;
			/**
			 * A collection of cell style mappings.
			 * @type {Adobe.Indesign.CellStyleMappings}
			 * @readonly
			 */
			public readonly cellStyleMappings: Adobe.Indesign.CellStyleMappings;
			/**
			 * A collection of cell styles.
			 * @type {Adobe.Indesign.CellStyles}
			 * @readonly
			 */
			public readonly cellStyles: Adobe.Indesign.CellStyles;
			/**
			 * Chapter numbering preferences.
			 * @type {Adobe.Indesign.ChapterNumberPreference}
			 * @readonly
			 */
			public readonly chapterNumberPreferences: Adobe.Indesign.ChapterNumberPreference;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Indesign.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Indesign.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Indesign.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Indesign.CharacterStyles;
			/**
			 * A collection of char style mappings.
			 * @type {Adobe.Indesign.CharStyleMappings}
			 * @readonly
			 */
			public readonly charStyleMappings: Adobe.Indesign.CharStyleMappings;
			/**
			 * A collection of checkboxes.
			 * @type {Adobe.Indesign.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Indesign.CheckBoxes;
			/**
			 * CJK grid preference settings.
			 * @type {Adobe.Indesign.CjkGridPreference}
			 * @readonly
			 */
			public readonly cjkGridPreferences: Adobe.Indesign.CjkGridPreference;
			/**
			 * The policy for handling colors in a CMYK color model, 
			 * including reading and embedding color profiles, mismatches 
			 * between embedded color profiles and the working space, and 
			 * moving colors from one document to another.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 */
			public cmykPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * The current CMYK profile.
			 * @type {string}
			 */
			public cmykProfile: string;
			/**
			 * A list of valid CMYK profiles.
			 * @type {any}
			 * @readonly
			 */
			public readonly cmykProfileList: any;
			/**
			 * A collection of colors.
			 * @type {Adobe.Indesign.Colors}
			 * @readonly
			 */
			public readonly colors: Adobe.Indesign.Colors;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Indesign.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Indesign.ComboBoxes;
			/**
			 * A collection of composite fonts.
			 * @type {Adobe.Indesign.CompositeFonts}
			 * @readonly
			 */
			public readonly compositeFonts: Adobe.Indesign.CompositeFonts;
			/**
			 * Conditional text preferences.
			 * @type {Adobe.Indesign.ConditionalTextPreference}
			 * @readonly
			 */
			public readonly conditionalTextPreferences: Adobe.Indesign.ConditionalTextPreference;
			/**
			 * A collection of conditions for conditional text.
			 * @type {Adobe.Indesign.Conditions}
			 * @readonly
			 */
			public readonly conditions: Adobe.Indesign.Conditions;
			/**
			 * A collection of condition sets for conditional text.
			 * @type {Adobe.Indesign.ConditionSets}
			 * @readonly
			 */
			public readonly conditionSets: Adobe.Indesign.ConditionSets;
			/**
			 * If true, the Document was converted.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly converted: boolean;
			/**
			 * A collection of cross reference formats.
			 * @type {Adobe.Indesign.CrossReferenceFormats}
			 * @readonly
			 */
			public readonly crossReferenceFormats: Adobe.Indesign.CrossReferenceFormats;
			/**
			 * A collection of cross reference text sources.
			 * @type {Adobe.Indesign.CrossReferenceSources}
			 * @readonly
			 */
			public readonly crossReferenceSources: Adobe.Indesign.CrossReferenceSources;
			/**
			 * A collection of dashed stroke styles.
			 * @type {Adobe.Indesign.DashedStrokeStyles}
			 * @readonly
			 */
			public readonly dashedStrokeStyles: Adobe.Indesign.DashedStrokeStyles;
			/**
			 * A collection of data merge image placeholders.
			 * @type {Adobe.Indesign.DataMergeImagePlaceholders}
			 * @readonly
			 */
			public readonly dataMergeImagePlaceholders: Adobe.Indesign.DataMergeImagePlaceholders;
			/**
			 * The data merge option properties that define the data merge.
			 * @type {Adobe.Indesign.DataMergeOption}
			 * @readonly
			 */
			public readonly dataMergeOptions: Adobe.Indesign.DataMergeOption;
			/**
			 * Data merge properties that define data merge fields and 
			 * preferences.
			 * @type {Adobe.Indesign.DataMerge}
			 * @readonly
			 */
			public readonly dataMergeProperties: Adobe.Indesign.DataMerge;
			/**
			 * A collection of data merge text placeholders.
			 * @type {Adobe.Indesign.DataMergeTextPlaceholders}
			 * @readonly
			 */
			public readonly dataMergeTextPlaceholders: Adobe.Indesign.DataMergeTextPlaceholders;
			/**
			 * The rendering intent for bitmap images.
			 * @type {Adobe.Indesign.RenderingIntent}
			 */
			public defaultImageIntent: Adobe.Indesign.RenderingIntent;
			/**
			 * User dictionary preference settings.
			 * @type {Adobe.Indesign.DictionaryPreference}
			 * @readonly
			 */
			public readonly dictionaryPreferences: Adobe.Indesign.DictionaryPreference;
			/**
			 * Document preference settings.
			 * @type {Adobe.Indesign.DocumentPreference}
			 * @readonly
			 */
			public readonly documentPreferences: Adobe.Indesign.DocumentPreference;
			/**
			 * A collection of dotted stroke styles.
			 * @type {Adobe.Indesign.DottedStrokeStyles}
			 * @readonly
			 */
			public readonly dottedStrokeStyles: Adobe.Indesign.DottedStrokeStyles;
			/**
			 * A collection of DTDs.
			 * @type {Adobe.Indesign.DTDs}
			 * @readonly
			 */
			public readonly dtds: Adobe.Indesign.DTDs;
			/**
			 * The Version Cue editing state of the file.
			 * @type {Adobe.Indesign.EditingState}
			 * @readonly
			 */
			public readonly editingState: Adobe.Indesign.EditingState;
			/**
			 * EPSTexts
			 * @type {Adobe.Indesign.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/**
			 * EPub export preference settings.
			 * @type {Adobe.Indesign.EPubExportPreference}
			 * @readonly
			 */
			public readonly epubExportPreferences: Adobe.Indesign.EPubExportPreference;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The default export for web preferences.
			 * @type {Adobe.Indesign.ExportForWebPreference}
			 * @readonly
			 */
			public readonly exportForWebPreferences: Adobe.Indesign.ExportForWebPreference;
			/**
			 * Dispatched after a Document export is canceled or fails. 
			 * This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly FAILED_EXPORT: string;
			/**
			 * The full path to the file.
			 * @type {File}
			 * @readonly
			 */
			public readonly filePath: File;
			/**
			 * A collection of fonts.
			 * @type {Adobe.Indesign.Fonts}
			 * @readonly
			 */
			public readonly fonts: Adobe.Indesign.Fonts;
			/**
			 * Footnote option settings.
			 * @type {Adobe.Indesign.FootnoteOption}
			 * @readonly
			 */
			public readonly footnoteOptions: Adobe.Indesign.FootnoteOption;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Indesign.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Indesign.FormFields;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 * @type {Adobe.Indesign.FrameFittingOption}
			 * @readonly
			 */
			public readonly frameFittingOptions: Adobe.Indesign.FrameFittingOption;
			/**
			 * The full path to the Document, including the name of the 
			 * Document.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * Galley preference settings.
			 * @type {Adobe.Indesign.GalleyPreference}
			 * @readonly
			 */
			public readonly galleyPreferences: Adobe.Indesign.GalleyPreference;
			/**
			 * A collection of gradients.
			 * @type {Adobe.Indesign.Gradients}
			 * @readonly
			 */
			public readonly gradients: Adobe.Indesign.Gradients;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Indesign.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * Grid preference settings.
			 * @type {Adobe.Indesign.GridPreference}
			 * @readonly
			 */
			public readonly gridPreferences: Adobe.Indesign.GridPreference;
			/**
			 * A collection of groups.
			 * @type {Adobe.Indesign.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * Guide preference settings.
			 * @type {Adobe.Indesign.GuidePreference}
			 * @readonly
			 */
			public readonly guidePreferences: Adobe.Indesign.GuidePreference;
			/**
			 * A collection of guides.
			 * @type {Adobe.Indesign.Guides}
			 * @readonly
			 */
			public readonly guides: Adobe.Indesign.Guides;
			/**
			 * HTML export preference settings.
			 * @type {Adobe.Indesign.HTMLExportPreference}
			 * @readonly
			 */
			public readonly htmlExportPreferences: Adobe.Indesign.HTMLExportPreference;
			/**
			 * A collection of hyperlink external page destinations.
			 * @type {Adobe.Indesign.HyperlinkExternalPageDestinations}
			 * @readonly
			 */
			public readonly hyperlinkExternalPageDestinations: Adobe.Indesign.HyperlinkExternalPageDestinations;
			/**
			 * A collection of hyperlink page destinations.
			 * @type {Adobe.Indesign.HyperlinkPageDestinations}
			 * @readonly
			 */
			public readonly hyperlinkPageDestinations: Adobe.Indesign.HyperlinkPageDestinations;
			/**
			 * A collection of hyperlink page item sources.
			 * @type {Adobe.Indesign.HyperlinkPageItemSources}
			 * @readonly
			 */
			public readonly hyperlinkPageItemSources: Adobe.Indesign.HyperlinkPageItemSources;
			/**
			 * A collection of hyperlinks.
			 * @type {Adobe.Indesign.Hyperlinks}
			 * @readonly
			 */
			public readonly hyperlinks: Adobe.Indesign.Hyperlinks;
			/**
			 * A collection of hyperlink text destinations.
			 * @type {Adobe.Indesign.HyperlinkTextDestinations}
			 * @readonly
			 */
			public readonly hyperlinkTextDestinations: Adobe.Indesign.HyperlinkTextDestinations;
			/**
			 * A collection of hyperlink text sources.
			 * @type {Adobe.Indesign.HyperlinkTextSources}
			 * @readonly
			 */
			public readonly hyperlinkTextSources: Adobe.Indesign.HyperlinkTextSources;
			/**
			 * A collection of hyperlink URL destinations.
			 * @type {Adobe.Indesign.HyperlinkURLDestinations}
			 * @readonly
			 */
			public readonly hyperlinkURLDestinations: Adobe.Indesign.HyperlinkURLDestinations;
			/**
			 * A collection of hyphenation exceptions lists.
			 * @type {Adobe.Indesign.HyphenationExceptions}
			 * @readonly
			 */
			public readonly hyphenationExceptions: Adobe.Indesign.HyphenationExceptions;
			/**
			 * The unique ID of the Document.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Document within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of indexes.
			 * @type {Adobe.Indesign.Indexes}
			 * @readonly
			 */
			public readonly indexes: Adobe.Indesign.Indexes;
			/**
			 * The index options properties that define how an index is 
			 * formatted.
			 * @type {Adobe.Indesign.IndexOptions}
			 * @readonly
			 */
			public readonly indexGenerationOptions: Adobe.Indesign.IndexOptions;
			/**
			 * A collection of indexing sort options.
			 * @type {Adobe.Indesign.IndexingSortOptions}
			 * @readonly
			 */
			public readonly indexingSortOptions: Adobe.Indesign.IndexingSortOptions;
			/**
			 * A collection of inks.
			 * @type {Adobe.Indesign.Inks}
			 * @readonly
			 */
			public readonly inks: Adobe.Indesign.Inks;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of kinsoku tables.
			 * @type {Adobe.Indesign.KinsokuTables}
			 * @readonly
			 */
			public readonly kinsokuTables: Adobe.Indesign.KinsokuTables;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of languages.
			 * @type {Adobe.Indesign.Languages}
			 * @readonly
			 */
			public readonly languages: Adobe.Indesign.Languages;
			/**
			 * A collection of layers.
			 * @type {Adobe.Indesign.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Indesign.Layers;
			/**
			 * Layout sdjustment preference settings.
			 * @type {Adobe.Indesign.LayoutAdjustmentPreference}
			 * @readonly
			 */
			public readonly layoutAdjustmentPreferences: Adobe.Indesign.LayoutAdjustmentPreference;
			/**
			 * Default properties specific to layout grids.
			 * @type {Adobe.Indesign.LayoutGridDataInformation}
			 * @readonly
			 */
			public readonly layoutGridData: Adobe.Indesign.LayoutGridDataInformation;
			/**
			 * A collection of layout windows.
			 * @type {Adobe.Indesign.LayoutWindows}
			 * @readonly
			 */
			public readonly layoutWindows: Adobe.Indesign.LayoutWindows;
			/**
			 * Linked Page Item options
			 * @type {Adobe.Indesign.LinkedPageItemOption}
			 * @readonly
			 */
			public readonly linkedPageItemOptions: Adobe.Indesign.LinkedPageItemOption;
			/**
			 * Linked story options
			 * @type {Adobe.Indesign.LinkedStoryOption}
			 * @readonly
			 */
			public readonly linkedStoryOptions: Adobe.Indesign.LinkedStoryOption;
			/**
			 * A collection of links.
			 * @type {Adobe.Indesign.Links}
			 * @readonly
			 */
			public readonly links: Adobe.Indesign.Links;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Indesign.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/**
			 * Margin preference settings.
			 * @type {Adobe.Indesign.MarginPreference}
			 * @readonly
			 */
			public readonly marginPreferences: Adobe.Indesign.MarginPreference;
			/**
			 * A collection of master spreads.
			 * @type {Adobe.Indesign.MasterSpreads}
			 * @readonly
			 */
			public readonly masterSpreads: Adobe.Indesign.MasterSpreads;
			/**
			 * Metadata preference settings.
			 * @type {Adobe.Indesign.MetadataPreference}
			 * @readonly
			 */
			public readonly metadataPreferences: Adobe.Indesign.MetadataPreference;
			/**
			 * A collection of mixed ink groups.
			 * @type {Adobe.Indesign.MixedInkGroups}
			 * @readonly
			 */
			public readonly mixedInkGroups: Adobe.Indesign.MixedInkGroups;
			/**
			 * A collection of mixed inks.
			 * @type {Adobe.Indesign.MixedInks}
			 * @readonly
			 */
			public readonly mixedInks: Adobe.Indesign.MixedInks;
			/**
			 * If true, the Document has been modified since it was last 
			 * saved.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly modified: boolean;
			/**
			 * A collection of mojikumi tables.
			 * @type {Adobe.Indesign.MojikumiTables}
			 * @readonly
			 */
			public readonly mojikumiTables: Adobe.Indesign.MojikumiTables;
			/**
			 * Mojikumi user interface preference settings.
			 * @type {Adobe.Indesign.MojikumiUiPreference}
			 * @readonly
			 */
			public readonly mojikumiUIPreferences: Adobe.Indesign.MojikumiUiPreference;
			/**
			 * A collection of Motion presets.
			 * @type {Adobe.Indesign.MotionPresets}
			 * @readonly
			 */
			public readonly motionPresets: Adobe.Indesign.MotionPresets;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Indesign.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/**
			 * The name of the Document.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * A collection of named grids.
			 * @type {Adobe.Indesign.NamedGrids}
			 * @readonly
			 */
			public readonly namedGrids: Adobe.Indesign.NamedGrids;
			/**
			 * A collection of numbered lists.
			 * @type {Adobe.Indesign.NumberingLists}
			 * @readonly
			 */
			public readonly numberingLists: Adobe.Indesign.NumberingLists;
			/**
			 * A collection of object style groups.
			 * @type {Adobe.Indesign.ObjectStyleGroups}
			 * @readonly
			 */
			public readonly objectStyleGroups: Adobe.Indesign.ObjectStyleGroups;
			/**
			 * A collection of object styles.
			 * @type {Adobe.Indesign.ObjectStyles}
			 * @readonly
			 */
			public readonly objectStyles: Adobe.Indesign.ObjectStyles;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The default page item formatting for the Document.
			 * @type {Adobe.Indesign.PageItemDefault}
			 * @readonly
			 */
			public readonly pageItemDefaults: Adobe.Indesign.PageItemDefault;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * A collection of pages.
			 * @type {Adobe.Indesign.Pages}
			 * @readonly
			 */
			public readonly pages: Adobe.Indesign.Pages;
			/**
			 * A collection of paragraph destinations.
			 * @type {Adobe.Indesign.ParagraphDestinations}
			 * @readonly
			 */
			public readonly paragraphDestinations: Adobe.Indesign.ParagraphDestinations;
			/**
			 * A collection of paragraph style groups.
			 * @type {Adobe.Indesign.ParagraphStyleGroups}
			 * @readonly
			 */
			public readonly paragraphStyleGroups: Adobe.Indesign.ParagraphStyleGroups;
			/**
			 * A collection of paragraph styles.
			 * @type {Adobe.Indesign.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Indesign.ParagraphStyles;
			/**
			 * A collection of para style mappings.
			 * @type {Adobe.Indesign.ParaStyleMappings}
			 * @readonly
			 */
			public readonly paraStyleMappings: Adobe.Indesign.ParaStyleMappings;
			/**
			 * The parent of the Document (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * Pasteboard preference settings.
			 * @type {Adobe.Indesign.PasteboardPreference}
			 * @readonly
			 */
			public readonly pasteboardPreferences: Adobe.Indesign.PasteboardPreference;
			/**
			 * The place gun.
			 * @type {Adobe.Indesign.PlaceGun}
			 * @readonly
			 */
			public readonly placeGuns: Adobe.Indesign.PlaceGun;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Indesign.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * Preflight option settings.
			 * @type {Adobe.Indesign.PreflightOption}
			 * @readonly
			 */
			public readonly preflightOptions: Adobe.Indesign.PreflightOption;
			/**
			 * A collection of preflight profiles.
			 * @type {Adobe.Indesign.PreflightProfiles}
			 * @readonly
			 */
			public readonly preflightProfiles: Adobe.Indesign.PreflightProfiles;
			/**
			 * Booklet printing options.
			 * @type {Adobe.Indesign.PrintBookletOption}
			 * @readonly
			 */
			public readonly printBookletOptions: Adobe.Indesign.PrintBookletOption;
			/**
			 * Print booklet preferences.
			 * @type {Adobe.Indesign.PrintBookletPrintPreference}
			 * @readonly
			 */
			public readonly printBookletPrintPreferences: Adobe.Indesign.PrintBookletPrintPreference;
			/**
			 * Print preference settings.
			 * @type {Adobe.Indesign.PrintPreference}
			 * @readonly
			 */
			public readonly printPreferences: Adobe.Indesign.PrintPreference;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radio buttons.
			 * @type {Adobe.Indesign.RadioButtons}
			 * @readonly
			 */
			public readonly radioButtons: Adobe.Indesign.RadioButtons;
			/**
			 * If true, the Document is read-only.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly readOnly: boolean;
			/**
			 * If true, the Document was recovered.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly recovered: boolean;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Indesign.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * The names of the items in the redo stack.
			 * @type {any}
			 * @readonly
			 */
			public readonly redoHistory: any;
			/**
			 * The name of the action on the top of the redo stack.
			 * @type {string}
			 * @readonly
			 */
			public readonly redoName: string;
			/**
			 * The policy for handling colors in an RGB color model, 
			 * including reading and embedding color profiles, handling 
			 * mismatches between embedded color profiles and the working 
			 * space, and moving colors from one document to another.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 */
			public rgbPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * The current RGB profile.
			 * @type {string}
			 */
			public rgbProfile: string;
			/**
			 * A list of valid RGB profiles.
			 * @type {any}
			 * @readonly
			 */
			public readonly rgbProfileList: any;
			/**
			 * If true, the Document has been saved since it was created.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly saved: boolean;
			/**
			 * A collection of sections.
			 * @type {Adobe.Indesign.Sections}
			 * @readonly
			 */
			public readonly sections: Adobe.Indesign.Sections;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public selection: any;
			/**
			 * The key object of the selection. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.PageItem}
			 */
			public selectionKeyObject: Adobe.Indesign.PageItem;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Indesign.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/**
			 * The rendering intent for all vector art (areas of solid 
			 * color) in native objects.
			 * @type {Adobe.Indesign.RenderingIntent}
			 */
			public solidColorIntent: Adobe.Indesign.RenderingIntent;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * A collection of spreads.
			 * @type {Adobe.Indesign.Spreads}
			 * @readonly
			 */
			public readonly spreads: Adobe.Indesign.Spreads;
			/**
			 * A collection of stories.
			 * @type {Adobe.Indesign.Stories}
			 * @readonly
			 */
			public readonly stories: Adobe.Indesign.Stories;
			/**
			 * Default properties specific to frame grids.
			 * @type {Adobe.Indesign.StoryGridDataInformation}
			 * @readonly
			 */
			public readonly storyGridData: Adobe.Indesign.StoryGridDataInformation;
			/**
			 * Story preference settings.
			 * @type {Adobe.Indesign.StoryPreference}
			 * @readonly
			 */
			public readonly storyPreferences: Adobe.Indesign.StoryPreference;
			/**
			 * A collection of story windows.
			 * @type {Adobe.Indesign.StoryWindows}
			 * @readonly
			 */
			public readonly storyWindows: Adobe.Indesign.StoryWindows;
			/**
			 * A collection of striped stroke styles.
			 * @type {Adobe.Indesign.StripedStrokeStyles}
			 * @readonly
			 */
			public readonly stripedStrokeStyles: Adobe.Indesign.StripedStrokeStyles;
			/**
			 * A collection of stroke styles.
			 * @type {Adobe.Indesign.StrokeStyles}
			 * @readonly
			 */
			public readonly strokeStyles: Adobe.Indesign.StrokeStyles;
			/**
			 * A collection of swatches.
			 * @type {Adobe.Indesign.Swatches}
			 * @readonly
			 */
			public readonly swatches: Adobe.Indesign.Swatches;
			/**
			 * A collection of table style groups.
			 * @type {Adobe.Indesign.TableStyleGroups}
			 * @readonly
			 */
			public readonly tableStyleGroups: Adobe.Indesign.TableStyleGroups;
			/**
			 * A collection of table style mappings.
			 * @type {Adobe.Indesign.TableStyleMappings}
			 * @readonly
			 */
			public readonly tableStyleMappings: Adobe.Indesign.TableStyleMappings;
			/**
			 * A collection of table styles.
			 * @type {Adobe.Indesign.TableStyles}
			 * @readonly
			 */
			public readonly tableStyles: Adobe.Indesign.TableStyles;
			/**
			 * Tagged PDF preferences.
			 * @type {Adobe.Indesign.TaggedPDFPreference}
			 * @readonly
			 */
			public readonly taggedPDFPreferences: Adobe.Indesign.TaggedPDFPreference;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Indesign.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Indesign.TextBoxes;
			/**
			 * Text default settings.
			 * @type {Adobe.Indesign.TextDefault}
			 * @readonly
			 */
			public readonly textDefaults: Adobe.Indesign.TextDefault;
			/**
			 * Text frame preference settings.
			 * @type {Adobe.Indesign.TextFramePreference}
			 * @readonly
			 */
			public readonly textFramePreferences: Adobe.Indesign.TextFramePreference;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Indesign.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * Text preference settings.
			 * @type {Adobe.Indesign.TextPreference}
			 * @readonly
			 */
			public readonly textPreferences: Adobe.Indesign.TextPreference;
			/**
			 * A collection of text variables.
			 * @type {Adobe.Indesign.TextVariables}
			 * @readonly
			 */
			public readonly textVariables: Adobe.Indesign.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Indesign.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Indesign.TextWrapPreference;
			/**
			 * A collection of tints.
			 * @type {Adobe.Indesign.Tints}
			 * @readonly
			 */
			public readonly tints: Adobe.Indesign.Tints;
			/**
			 * A collection of TOC styles.
			 * @type {Adobe.Indesign.TOCStyles}
			 * @readonly
			 */
			public readonly tocStyles: Adobe.Indesign.TOCStyles;
			/**
			 * Transparency preference settings.
			 * @type {Adobe.Indesign.TransparencyPreference}
			 * @readonly
			 */
			public readonly transparencyPreferences: Adobe.Indesign.TransparencyPreference;
			/**
			 * A collection of trap presets.
			 * @type {Adobe.Indesign.TrapPresets}
			 * @readonly
			 */
			public readonly trapPresets: Adobe.Indesign.TrapPresets;
			/**
			 * The names of the items in the undo stack.
			 * @type {any}
			 * @readonly
			 */
			public readonly undoHistory: any;
			/**
			 * The name of the action on the top of the undo stack.
			 * @type {string}
			 * @readonly
			 */
			public readonly undoName: string;
			/**
			 * The swatches that are not being used.
			 * @type {any}
			 * @readonly
			 */
			public readonly unusedSwatches: any;
			/**
			 * A collection of XML validation errors.
			 * @type {Adobe.Indesign.ValidationErrors}
			 * @readonly
			 */
			public readonly validationErrors: Adobe.Indesign.ValidationErrors;
			/**
			 * The Version Cue version state of the file.
			 * @type {Adobe.Indesign.VersionState}
			 * @readonly
			 */
			public readonly versionState: Adobe.Indesign.VersionState;
			/**
			 * View preference settings.
			 * @type {Adobe.Indesign.ViewPreference}
			 * @readonly
			 */
			public readonly viewPreferences: Adobe.Indesign.ViewPreference;
			/**
			 * If true, the Document is visible.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly visible: boolean;
			/**
			 * Watermark preferences
			 * @type {Adobe.Indesign.WatermarkPreference}
			 * @readonly
			 */
			public readonly watermarkPreferences: Adobe.Indesign.WatermarkPreference;
			/**
			 * A collection of windows.
			 * @type {Adobe.Indesign.Windows}
			 * @readonly
			 */
			public readonly windows: Adobe.Indesign.Windows;
			/**
			 * A collection of XML comments.
			 * @type {Adobe.Indesign.XMLComments}
			 * @readonly
			 */
			public readonly xmlComments: Adobe.Indesign.XMLComments;
			/**
			 * A collection of XML elements.
			 * @type {Adobe.Indesign.XMLElements}
			 * @readonly
			 */
			public readonly xmlElements: Adobe.Indesign.XMLElements;
			/**
			 * A collection of XML export maps.
			 * @type {Adobe.Indesign.XMLExportMaps}
			 * @readonly
			 */
			public readonly xmlExportMaps: Adobe.Indesign.XMLExportMaps;
			/**
			 * XML export preference settings.
			 * @type {Adobe.Indesign.XMLExportPreference}
			 * @readonly
			 */
			public readonly xmlExportPreferences: Adobe.Indesign.XMLExportPreference;
			/**
			 * A collection of XML import maps.
			 * @type {Adobe.Indesign.XMLImportMaps}
			 * @readonly
			 */
			public readonly xmlImportMaps: Adobe.Indesign.XMLImportMaps;
			/**
			 * XML import preference settings.
			 * @type {Adobe.Indesign.XMLImportPreference}
			 * @readonly
			 */
			public readonly xmlImportPreferences: Adobe.Indesign.XMLImportPreference;
			/**
			 * A collection of XML instructions.
			 * @type {Adobe.Indesign.XMLInstructions}
			 * @readonly
			 */
			public readonly xmlInstructions: Adobe.Indesign.XMLInstructions;
			/**
			 * A collection of XML items.
			 * @type {Adobe.Indesign.XMLItems}
			 * @readonly
			 */
			public readonly xmlItems: Adobe.Indesign.XMLItems;
			/**
			 * The XML preference settings.
			 * @type {Adobe.Indesign.XMLPreference}
			 * @readonly
			 */
			public readonly xmlPreferences: Adobe.Indesign.XMLPreference;
			/**
			 * A collection of xml stories.
			 * @type {Adobe.Indesign.XmlStories}
			 * @readonly
			 */
			public readonly xmlStories: Adobe.Indesign.XmlStories;
			/**
			 * A collection of XML tags.
			 * @type {Adobe.Indesign.XMLTags}
			 * @readonly
			 */
			public readonly xmlTags: Adobe.Indesign.XMLTags;
			/**
			 * XML view preference settings.
			 * @type {Adobe.Indesign.XMLViewPreference}
			 * @readonly
			 */
			public readonly xmlViewPreferences: Adobe.Indesign.XMLViewPreference;
			/**
			 * The ruler origin, specified as page coordinates in the 
			 * format [x, y].
			 * @type {any}
			 */
			public zeroPoint: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDocument(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Align page items.
			 * @param {any[]} alignDistributeItemsParam The page items to 
			 * align or distribute.
			 * @param {AlignOptions} alignOptionParam The type of alignment 
			 * to apply.
			 * @param {AlignDistributeBounds} alignDistributeBoundsParam 
			 * The bounds within which to align or distribute the page 
			 * items. (Optional)
			 * @param {PageItem} referenceParam The reference or key object 
			 * to align to distribute relative to. Required when 'align 
			 * distribute bounds' specifies 'key object'. (Optional)
			 * @returns {void}
			 */
			public align(alignDistributeItemsParam: any[], alignOptionParam: AlignOptions, alignDistributeBoundsParam: AlignDistributeBounds, referenceParam: PageItem): void;
			/**
			 * asynchronously exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {Adobe.Indesign.BackgroundTask}
			 */
			public asynchronousExportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.BackgroundTask;
			/**
			 * Change comoser to optyca
			 * @returns {void}
			 */
			public changeComposer(): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Check in to Version Cue.
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public checkIn(versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Removes the frame fittings options and resets it to the 
			 * initial state.
			 * @returns {void}
			 */
			public clearFrameFittingOptions(): void;
			/**
			 * Close the Document
			 * @param {SaveOptions} savingParam Whether to save changes 
			 * before closing the Document (Optional)
			 * @param {File} savingInParam The file in which to save the 
			 * Document (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public close(savingParam: SaveOptions, savingInParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Creates an alternate layout for a given list of spreads.
			 * @param {any[]} spreadItemsParam The spreads to create an 
			 * alternate layout for.
			 * @param {string} nameParam The name of the alternate layout. 
			 * Note: This is used for the named layout for the new section 
			 * for the duplicated spreads.
			 * @param {any} widthParam The width of the pages created.
			 * @param {any} heightParam The height of the pages created.
			 * @param {boolean} createTextStylesParam Whether to create new 
			 * text styles.
			 * @param {boolean} linkTextStoriesParam Whether to create 
			 * linked text for duplicated text stories.
			 * @param {LayoutRuleOptions} layoutRuleParam What layout rule 
			 * to set on the pages.
			 * @returns {void}
			 */
			public createAlternateLayout(spreadItemsParam: any[], nameParam: string, widthParam: any, heightParam: any, createTextStylesParam: boolean, linkTextStoriesParam: boolean, layoutRuleParam: LayoutRuleOptions): void;
			/**
			 * Creates a table of contents.
			 * @param {TOCStyle} usingParam The TOC style to use to define 
			 * the content, title, and format of the table of contents.
			 * @param {boolean} replacingParam If true, replaces the 
			 * existing TOC. (Optional)
			 * @param {Book} fromBookParam The book whose documents to 
			 * include in the TOC. (Optional)
			 * @param {any[]} placePointParam The point at which to place 
			 * the TOC story, specified as page coordinates in the format 
			 * [x, y]. (Optional)
			 * @param {boolean} includeOversetParam If true, includes 
			 * overset text TOC entries in the TOC. (Optional)
			 * @param {Layer} destinationLayerParam The layer on which to 
			 * place the TOC. (Optional)
			 * @returns {any}
			 */
			public createTOC(usingParam: TOCStyle, replacingParam: boolean, fromBookParam: Book, placePointParam: any[], includeOversetParam: boolean, destinationLayerParam: Layer): any;
			/**
			 * Deletes an alternate layout.
			 * @param {string} nameParam The name of the alternate layout 
			 * to delete.
			 * @returns {void}
			 */
			public deleteAlternateLayout(nameParam: string): void;
			/**
			 * Deletes unused XML markup tags.
			 * @returns {void}
			 */
			public deleteUnusedTags(): void;
			/**
			 * Distribute page items.
			 * @param {any[]} alignDistributeItemsParam The page items to 
			 * align or distribute
			 * @param {DistributeOptions} distributeOptionParam The type of 
			 * distribution to apply.
			 * @param {AlignDistributeBounds} alignDistributeBoundsParam 
			 * The bounds within which to align or distribute the page 
			 * items. (Optional)
			 * @param {boolean} useDistributeMeasurementParam If true, 
			 * distribute space between page items. When this property is 
			 * true, the bounds setting is ignored. (Optional)
			 * @param {any} absoluteDistributeMeasurementParam The distance 
			 * to use when distributing page items. Required when 'align 
			 * distribute bounds' specifies 'key object'. (Optional)
			 * @param {PageItem} referenceParam The reference or key object 
			 * to align to distribute relative to. Required when 'align 
			 * distribute bounds' specifies 'key object'. (Optional)
			 * @returns {void}
			 */
			public distribute(alignDistributeItemsParam: any[], distributeOptionParam: DistributeOptions, alignDistributeBoundsParam: AlignDistributeBounds, useDistributeMeasurementParam: boolean, absoluteDistributeMeasurementParam: any, referenceParam: PageItem): void;
			/**
			 * Embed this profile to the document.
			 * @param {any} usingParam The preflight profile to embed. Can 
			 * accept: String or PreflightProfile.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public embed(usingParam: any): Adobe.Indesign.PreflightProfile;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Exports stroke styles or presets.
			 * @param {File} toParam The file to save to
			 * @param {any[]} strokeStyleListParam The list of stroke 
			 * styles to save
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public exportStrokeStyles(toParam: File, strokeStyleListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Imports a process color swatch from a preloaded Adobe color 
			 * book.
			 * @param {string} nameParam The process color to load.
			 * @returns {Adobe.Indesign.Color}
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam The spot color to load.
			 * @returns {Adobe.Indesign.Color}
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports a DTD to use for validation.
			 * @param {File} fromParam The path to the DTD file.
			 * @returns {void}
			 */
			public importDtd(fromParam: File): void;
			/**
			 * Imports the cross reference formats from specified file.
			 * @param {File} fromParam The file whose formats to import.
			 * @returns {void}
			 */
			public importFormats(fromParam: File): void;
			/**
			 * Imports the specified styles.
			 * @param {ImportFormat} formatParam The types of styles to 
			 * import.
			 * @param {File} fromParam The file containing the styles you 
			 * want to import.
			 * @param {GlobalClashResolutionStrategy} globalStrategyParam 
			 * The resolution strategy to employ for imported styles that 
			 * have the same names as existing styles. (Optional)
			 * @returns {void}
			 */
			public importStyles(formatParam: ImportFormat, fromParam: File, globalStrategyParam: GlobalClashResolutionStrategy): void;
			/**
			 * Imports the specified XML file into an InDesign document.
			 * @param {File} fromParam The XML file.
			 * @returns {void}
			 */
			public importXML(fromParam: File): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Load conditions from the specified file.
			 * @param {File} fromParam The path to the file that contains 
			 * the conditions.
			 * @param {boolean} loadConditionSetsParam If true, load the 
			 * condition sets as well. (Optional)
			 * @returns {void}
			 */
			public loadConditions(fromParam: File, loadConditionSetsParam: boolean): void;
			/**
			 * Load masterpages from an InDesign file.
			 * @param {File} fromParam The InDesign file to load the 
			 * masters from.
			 * @param {GlobalClashResolutionStrategyForMasterPage} 
			 * globalStrategyForMasterPageParam the global clash resolution 
			 * strategy for load master page (Optional)
			 * @returns {void}
			 */
			public loadMasters(fromParam: File, globalStrategyForMasterPageParam: GlobalClashResolutionStrategyForMasterPage): void;
			/**
			 * Load swatches from the specified file.
			 * @param {File} fromParam The swatch file or InDesign 
			 * document.
			 * @returns {void}
			 */
			public loadSwatches(fromParam: File): void;
			/**
			 * Loads a set of XML markup tags from the specified file.
			 * @param {File} fromParam The path to the file that contains 
			 * the tags.
			 * @returns {void}
			 */
			public loadXMLTags(fromParam: File): void;
			/**
			 * Auto tag the document based on the style to tag mappings
			 * @returns {void}
			 */
			public mapStylesToXMLTags(): void;
			/**
			 * Auto style the document based on the tag to style mappings
			 * @returns {void}
			 */
			public mapXMLTagsToStyles(): void;
			/**
			 * Packages the document.
			 * @param {File} toParam The folder, alias, or path in which to 
			 * place the packaged files.
			 * @param {boolean} copyingFontsParam If true, copies fonts 
			 * used in the document to the package folder.
			 * @param {boolean} copyingLinkedGraphicsParam If true, copies 
			 * linked graphics files to the package folder.
			 * @param {boolean} copyingProfilesParam If true, copies color 
			 * profiles to the package folder.
			 * @param {boolean} updatingGraphicsParam If true, updates 
			 * graphics links to the package folder. 
			 * @param {boolean} includingHiddenLayersParam If true, copies 
			 * fonts and links from hidden layers to the package.
			 * @param {boolean} ignorePreflightErrorsParam If true, ignores 
			 * preflight errors and proceeds with the packaging. If false, 
			 * cancels the packaging when errors exist.
			 * @param {boolean} creatingReportParam If true, creates a 
			 * package report that includes printing instructions, print 
			 * settings, lists of fonts, links and required inks, and other 
			 * information.
			 * @param {string} versionCommentsParam The comments for the 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {boolean}
			 */
			public packageForPrint(toParam: File, copyingFontsParam: boolean, copyingLinkedGraphicsParam: boolean, copyingProfilesParam: boolean, updatingGraphicsParam: boolean, includingHiddenLayersParam: boolean, ignorePreflightErrorsParam: boolean, creatingReportParam: boolean, versionCommentsParam: string, forceSaveParam: boolean): boolean;
			/**
			 * Place one or more files following the behavior of the place 
			 * menu item. This may load the place gun or replace the 
			 * selected object, depending on current preferences.
			 * @param {any} fileNameParam One or more files to place. Can 
			 * accept: File or Array of Files.
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {void}
			 */
			public place(fileNameParam: any, showingOptionsParam: boolean, withPropertiesParam: any): void;
			/**
			 * Deprecated: Use ContentPlacerObject load method. Original 
			 * Description: Place following the behavior of the place and 
			 * link story menu item. This will load the place gun.
			 * @param {Story} parentStoryParam The story to place and link 
			 * from.
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * link options dialog (Optional)
			 * @returns {void}
			 */
			public placeAndLink(parentStoryParam: Story, showingOptionsParam: boolean): void;
			/**
			 * Prints the Document(s).
			 * @param {boolean} printDialogParam Whether to invoke the 
			 * print dialog (Optional)
			 * @param {any} usingParam Printer preset to use. Can accept: 
			 * PrinterPresetTypes enumerator or PrinterPreset. (Optional)
			 * @returns {void}
			 */
			public print(printDialogParam: boolean, usingParam: any): void;
			/**
			 * Print the Booklet using current document and Booklet and 
			 * Print settings in the document
			 * @param {boolean} printBookletDialogParam Whether to invoke 
			 * the print booklet dialog (Optional)
			 * @param {any} usingParam Printer preset to use. Can accept: 
			 * PrinterPresetTypes enumerator or PrinterPreset. (Optional)
			 * @returns {void}
			 */
			public printBooklet(printBookletDialogParam: boolean, usingParam: any): void;
			/**
			 * Recomposes the text in the Document.
			 * @returns {void}
			 */
			public recompose(): void;
			/**
			 * Redoes the last action.
			 * @returns {void}
			 */
			public redo(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDocument(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Resets all the buttons to their Normal state.
			 * @returns {void}
			 */
			public resetAllButtons(): void;
			/**
			 * Resets all the multi-state objects to their first state.
			 * @returns {void}
			 */
			public resetAllMultiStateObjects(): void;
			/**
			 * Reverts the document to its state at the last save 
			 * operation.
			 * @returns {boolean}
			 */
			public revert(): boolean;
			/**
			 * Reverts to the version of the document in Version Cue.
			 * @param {boolean} forceRevertParam Forcibly reverts to the 
			 * project version. (Optional)
			 * @returns {void}
			 */
			public revertToProject(forceRevertParam: boolean): void;
			/**
			 * Save the document
			 * @param {File} toParam Where to save the document. If the 
			 * document is already saved, a copy is saved at this path, the 
			 * original file is closed the new copy is opened (Optional)
			 * @param {boolean} stationeryParam Whether to save the file as 
			 * stationery (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {Adobe.Indesign.Document}
			 */
			public save(toParam: File, stationeryParam: boolean, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.Document;
			/**
			 * Saves a copy of the document.
			 * @param {File} toParam The file path for the copy. Note: 
			 * Leaves the original document open and does not open the 
			 * copy. (Optional)
			 * @param {boolean} stationeryParam If true, saves the file as 
			 * stationery (Mac OS) or as a template (Windows). Note: The 
			 * file extension for stationery and templates is different 
			 * than the extension for regular files. (Optional)
			 * @returns {void}
			 */
			public saveACopy(toParam: File, stationeryParam: boolean): void;
			/**
			 * Saves the specified swatch(es) to a swatchbook file.
			 * @param {File} toParam The swatchbook file to save to.
			 * @param {any[]} swatchListParam The swatch(es) to save.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public saveSwatches(toParam: File, swatchListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Saves a set of tags to an external file.
			 * @param {File} toParam The full path to the file in which to 
			 * save the tags.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public saveXMLTags(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam The objects to select. Can 
			 * accept: Object, Array of Objects, NothingEnum enumerator or 
			 * SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Document in relation to previously 
			 * selected objects. (Optional)
			 * @returns {void}
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/**
			 * Synchronizes the file with the Version Cue project.
			 * @param {SyncConflictResolution} syncConflictResolutionParam 
			 * The conflict resolution method to use during 
			 * synchronization. (Optional)
			 * @param {string} versionCommentsParam The comments that 
			 * describe the version. (Optional)
			 * @returns {Adobe.Indesign.VersionCueSyncStatus}
			 */
			public synchronizeWithVersionCue(syncConflictResolutionParam: SyncConflictResolution, versionCommentsParam: string): Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Undoes the last action.
			 * @returns {void}
			 */
			public undo(): void;
			/**
			 * Updates cross references' text source content in the 
			 * document.
			 * @returns {void}
			 */
			public updateCrossReferences(): void;
		}
	}
}