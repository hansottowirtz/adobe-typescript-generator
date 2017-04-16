/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Document extends Adobe.Csawlib.CSHostObject {
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
			 * @type {Adobe.Incopy.AnchoredObjectDefault}
			 * @readonly
			 */
			public readonly anchoredObjectDefaults: Adobe.Incopy.AnchoredObjectDefault;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Incopy.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Incopy.AnchoredObjectSetting;
			/**
			 * A collection of assignments.
			 * @type {Adobe.Incopy.Assignments}
			 * @readonly
			 */
			public readonly assignments: Adobe.Incopy.Assignments;
			/**
			 * The XML element associated with the Document.
			 * @type {Adobe.Incopy.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/**
			 * Baseline frame grid option settings.
			 * @type {Adobe.Incopy.BaselineFrameGridOption}
			 * @readonly
			 */
			public readonly baselineFrameGridOptions: Adobe.Incopy.BaselineFrameGridOption;
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
			 * A collection of buttons.
			 * @type {Adobe.Incopy.Buttons}
			 * @readonly
			 */
			public readonly buttons: Adobe.Incopy.Buttons;
			/**
			 * A collection of cell style groups.
			 * @type {Adobe.Incopy.CellStyleGroups}
			 * @readonly
			 */
			public readonly cellStyleGroups: Adobe.Incopy.CellStyleGroups;
			/**
			 * A collection of cell styles.
			 * @type {Adobe.Incopy.CellStyles}
			 * @readonly
			 */
			public readonly cellStyles: Adobe.Incopy.CellStyles;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Incopy.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Incopy.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Incopy.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Incopy.CharacterStyles;
			/**
			 * A collection of checkboxes.
			 * @type {Adobe.Incopy.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Incopy.CheckBoxes;
			/**
			 * A collection of colors.
			 * @type {Adobe.Incopy.Colors}
			 * @readonly
			 */
			public readonly colors: Adobe.Incopy.Colors;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Incopy.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Incopy.ComboBoxes;
			/**
			 * Conditional text preferences.
			 * @type {Adobe.Incopy.ConditionalTextPreference}
			 * @readonly
			 */
			public readonly conditionalTextPreferences: Adobe.Incopy.ConditionalTextPreference;
			/**
			 * A collection of conditions for conditional text.
			 * @type {Adobe.Incopy.Conditions}
			 * @readonly
			 */
			public readonly conditions: Adobe.Incopy.Conditions;
			/**
			 * A collection of condition sets for conditional text.
			 * @type {Adobe.Incopy.ConditionSets}
			 * @readonly
			 */
			public readonly conditionSets: Adobe.Incopy.ConditionSets;
			/**
			 * If true, the Document was converted.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly converted: boolean;
			/**
			 * A collection of cross reference formats.
			 * @type {Adobe.Incopy.CrossReferenceFormats}
			 * @readonly
			 */
			public readonly crossReferenceFormats: Adobe.Incopy.CrossReferenceFormats;
			/**
			 * A collection of cross reference text sources.
			 * @type {Adobe.Incopy.CrossReferenceSources}
			 * @readonly
			 */
			public readonly crossReferenceSources: Adobe.Incopy.CrossReferenceSources;
			/**
			 * User dictionary preference settings.
			 * @type {Adobe.Incopy.DictionaryPreference}
			 * @readonly
			 */
			public readonly dictionaryPreferences: Adobe.Incopy.DictionaryPreference;
			/**
			 * Document preference settings.
			 * @type {Adobe.Incopy.DocumentPreference}
			 * @readonly
			 */
			public readonly documentPreferences: Adobe.Incopy.DocumentPreference;
			/**
			 * A collection of DTDs.
			 * @type {Adobe.Incopy.DTDs}
			 * @readonly
			 */
			public readonly dtds: Adobe.Incopy.DTDs;
			/**
			 * The Version Cue editing state of the file.
			 * @type {Adobe.Incopy.EditingState}
			 * @readonly
			 */
			public readonly editingState: Adobe.Incopy.EditingState;
			/**
			 * EPSTexts
			 * @type {Adobe.Incopy.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The default export for web preferences.
			 * @type {Adobe.Incopy.ExportForWebPreference}
			 * @readonly
			 */
			public readonly exportForWebPreferences: Adobe.Incopy.ExportForWebPreference;
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
			 * @type {Adobe.Incopy.Fonts}
			 * @readonly
			 */
			public readonly fonts: Adobe.Incopy.Fonts;
			/**
			 * Footnote option settings.
			 * @type {Adobe.Incopy.FootnoteOption}
			 * @readonly
			 */
			public readonly footnoteOptions: Adobe.Incopy.FootnoteOption;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Incopy.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Incopy.FormFields;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 * @type {Adobe.Incopy.FrameFittingOption}
			 * @readonly
			 */
			public readonly frameFittingOptions: Adobe.Incopy.FrameFittingOption;
			/**
			 * The full path to the Document, including the name of the 
			 * Document.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * Galley preference settings.
			 * @type {Adobe.Incopy.GalleyPreference}
			 * @readonly
			 */
			public readonly galleyPreferences: Adobe.Incopy.GalleyPreference;
			/**
			 * A collection of gradients.
			 * @type {Adobe.Incopy.Gradients}
			 * @readonly
			 */
			public readonly gradients: Adobe.Incopy.Gradients;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Incopy.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/**
			 * Grid preference settings.
			 * @type {Adobe.Incopy.GridPreference}
			 * @readonly
			 */
			public readonly gridPreferences: Adobe.Incopy.GridPreference;
			/**
			 * A collection of groups.
			 * @type {Adobe.Incopy.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Incopy.Groups;
			/**
			 * Guide preference settings.
			 * @type {Adobe.Incopy.GuidePreference}
			 * @readonly
			 */
			public readonly guidePreferences: Adobe.Incopy.GuidePreference;
			/**
			 * A collection of guides.
			 * @type {Adobe.Incopy.Guides}
			 * @readonly
			 */
			public readonly guides: Adobe.Incopy.Guides;
			/**
			 * A collection of hyperlink external page destinations.
			 * @type {Adobe.Incopy.HyperlinkExternalPageDestinations}
			 * @readonly
			 */
			public readonly hyperlinkExternalPageDestinations: Adobe.Incopy.HyperlinkExternalPageDestinations;
			/**
			 * A collection of hyperlink page item sources.
			 * @type {Adobe.Incopy.HyperlinkPageItemSources}
			 * @readonly
			 */
			public readonly hyperlinkPageItemSources: Adobe.Incopy.HyperlinkPageItemSources;
			/**
			 * A collection of hyperlinks.
			 * @type {Adobe.Incopy.Hyperlinks}
			 * @readonly
			 */
			public readonly hyperlinks: Adobe.Incopy.Hyperlinks;
			/**
			 * A collection of hyperlink text destinations.
			 * @type {Adobe.Incopy.HyperlinkTextDestinations}
			 * @readonly
			 */
			public readonly hyperlinkTextDestinations: Adobe.Incopy.HyperlinkTextDestinations;
			/**
			 * A collection of hyperlink text sources.
			 * @type {Adobe.Incopy.HyperlinkTextSources}
			 * @readonly
			 */
			public readonly hyperlinkTextSources: Adobe.Incopy.HyperlinkTextSources;
			/**
			 * A collection of hyperlink URL destinations.
			 * @type {Adobe.Incopy.HyperlinkURLDestinations}
			 * @readonly
			 */
			public readonly hyperlinkURLDestinations: Adobe.Incopy.HyperlinkURLDestinations;
			/**
			 * A collection of hyphenation exceptions lists.
			 * @type {Adobe.Incopy.HyphenationExceptions}
			 * @readonly
			 */
			public readonly hyphenationExceptions: Adobe.Incopy.HyphenationExceptions;
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
			 * A collection of indexing sort options.
			 * @type {Adobe.Incopy.IndexingSortOptions}
			 * @readonly
			 */
			public readonly indexingSortOptions: Adobe.Incopy.IndexingSortOptions;
			/**
			 * A collection of inks.
			 * @type {Adobe.Incopy.Inks}
			 * @readonly
			 */
			public readonly inks: Adobe.Incopy.Inks;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of kinsoku tables.
			 * @type {Adobe.Incopy.KinsokuTables}
			 * @readonly
			 */
			public readonly kinsokuTables: Adobe.Incopy.KinsokuTables;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of languages.
			 * @type {Adobe.Incopy.Languages}
			 * @readonly
			 */
			public readonly languages: Adobe.Incopy.Languages;
			/**
			 * A collection of layers.
			 * @type {Adobe.Incopy.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Incopy.Layers;
			/**
			 * A collection of links.
			 * @type {Adobe.Incopy.Links}
			 * @readonly
			 */
			public readonly links: Adobe.Incopy.Links;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Incopy.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Incopy.ListBoxes;
			/**
			 * Margin preference settings.
			 * @type {Adobe.Incopy.MarginPreference}
			 * @readonly
			 */
			public readonly marginPreferences: Adobe.Incopy.MarginPreference;
			/**
			 * A collection of master spreads.
			 * @type {Adobe.Incopy.MasterSpreads}
			 * @readonly
			 */
			public readonly masterSpreads: Adobe.Incopy.MasterSpreads;
			/**
			 * Metadata preference settings.
			 * @type {Adobe.Incopy.MetadataPreference}
			 * @readonly
			 */
			public readonly metadataPreferences: Adobe.Incopy.MetadataPreference;
			/**
			 * A collection of mixed ink groups.
			 * @type {Adobe.Incopy.MixedInkGroups}
			 * @readonly
			 */
			public readonly mixedInkGroups: Adobe.Incopy.MixedInkGroups;
			/**
			 * A collection of mixed inks.
			 * @type {Adobe.Incopy.MixedInks}
			 * @readonly
			 */
			public readonly mixedInks: Adobe.Incopy.MixedInks;
			/**
			 * If true, the Document has been modified since it was last 
			 * saved.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly modified: boolean;
			/**
			 * A collection of mojikumi tables.
			 * @type {Adobe.Incopy.MojikumiTables}
			 * @readonly
			 */
			public readonly mojikumiTables: Adobe.Incopy.MojikumiTables;
			/**
			 * Mojikumi user interface preference settings.
			 * @type {Adobe.Incopy.MojikumiUiPreference}
			 * @readonly
			 */
			public readonly mojikumiUIPreferences: Adobe.Incopy.MojikumiUiPreference;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Incopy.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/**
			 * The name of the Document.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * A collection of numbered lists.
			 * @type {Adobe.Incopy.NumberingLists}
			 * @readonly
			 */
			public readonly numberingLists: Adobe.Incopy.NumberingLists;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Incopy.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The default page item formatting for the Document.
			 * @type {Adobe.Incopy.PageItemDefault}
			 * @readonly
			 */
			public readonly pageItemDefaults: Adobe.Incopy.PageItemDefault;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Incopy.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/**
			 * A collection of pages.
			 * @type {Adobe.Incopy.Pages}
			 * @readonly
			 */
			public readonly pages: Adobe.Incopy.Pages;
			/**
			 * A collection of paragraph destinations.
			 * @type {Adobe.Incopy.ParagraphDestinations}
			 * @readonly
			 */
			public readonly paragraphDestinations: Adobe.Incopy.ParagraphDestinations;
			/**
			 * A collection of paragraph style groups.
			 * @type {Adobe.Incopy.ParagraphStyleGroups}
			 * @readonly
			 */
			public readonly paragraphStyleGroups: Adobe.Incopy.ParagraphStyleGroups;
			/**
			 * A collection of paragraph styles.
			 * @type {Adobe.Incopy.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Incopy.ParagraphStyles;
			/**
			 * The parent of the Document (a Application).
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * Pasteboard preference settings.
			 * @type {Adobe.Incopy.PasteboardPreference}
			 * @readonly
			 */
			public readonly pasteboardPreferences: Adobe.Incopy.PasteboardPreference;
			/**
			 * The place gun.
			 * @type {Adobe.Incopy.PlaceGun}
			 * @readonly
			 */
			public readonly placeGuns: Adobe.Incopy.PlaceGun;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Incopy.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Incopy.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radio buttons.
			 * @type {Adobe.Incopy.RadioButtons}
			 * @readonly
			 */
			public readonly radioButtons: Adobe.Incopy.RadioButtons;
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
			 * @type {Adobe.Incopy.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Incopy.Rectangles;
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
			 * If true, the Document has been saved since it was created.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly saved: boolean;
			/**
			 * A collection of sections.
			 * @type {Adobe.Incopy.Sections}
			 * @readonly
			 */
			public readonly sections: Adobe.Incopy.Sections;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public selection: any;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Incopy.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Incopy.SignatureFields;
			/**
			 * The spline items collection.
			 * @type {Adobe.Incopy.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * A collection of spreads.
			 * @type {Adobe.Incopy.Spreads}
			 * @readonly
			 */
			public readonly spreads: Adobe.Incopy.Spreads;
			/**
			 * A collection of stories.
			 * @type {Adobe.Incopy.Stories}
			 * @readonly
			 */
			public readonly stories: Adobe.Incopy.Stories;
			/**
			 * Story preference settings.
			 * @type {Adobe.Incopy.StoryPreference}
			 * @readonly
			 */
			public readonly storyPreferences: Adobe.Incopy.StoryPreference;
			/**
			 * A collection of stroke styles.
			 * @type {Adobe.Incopy.StrokeStyles}
			 * @readonly
			 */
			public readonly strokeStyles: Adobe.Incopy.StrokeStyles;
			/**
			 * A collection of swatches.
			 * @type {Adobe.Incopy.Swatches}
			 * @readonly
			 */
			public readonly swatches: Adobe.Incopy.Swatches;
			/**
			 * A collection of table style groups.
			 * @type {Adobe.Incopy.TableStyleGroups}
			 * @readonly
			 */
			public readonly tableStyleGroups: Adobe.Incopy.TableStyleGroups;
			/**
			 * A collection of table styles.
			 * @type {Adobe.Incopy.TableStyles}
			 * @readonly
			 */
			public readonly tableStyles: Adobe.Incopy.TableStyles;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Incopy.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Incopy.TextBoxes;
			/**
			 * Text default settings.
			 * @type {Adobe.Incopy.TextDefault}
			 * @readonly
			 */
			public readonly textDefaults: Adobe.Incopy.TextDefault;
			/**
			 * Text frame preference settings.
			 * @type {Adobe.Incopy.TextFramePreference}
			 * @readonly
			 */
			public readonly textFramePreferences: Adobe.Incopy.TextFramePreference;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Incopy.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/**
			 * Text preference settings.
			 * @type {Adobe.Incopy.TextPreference}
			 * @readonly
			 */
			public readonly textPreferences: Adobe.Incopy.TextPreference;
			/**
			 * A collection of text variables.
			 * @type {Adobe.Incopy.TextVariables}
			 * @readonly
			 */
			public readonly textVariables: Adobe.Incopy.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Incopy.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Incopy.TextWrapPreference;
			/**
			 * A collection of tints.
			 * @type {Adobe.Incopy.Tints}
			 * @readonly
			 */
			public readonly tints: Adobe.Incopy.Tints;
			/**
			 * A collection of trap presets.
			 * @type {Adobe.Incopy.TrapPresets}
			 * @readonly
			 */
			public readonly trapPresets: Adobe.Incopy.TrapPresets;
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
			 * @type {Adobe.Incopy.ValidationErrors}
			 * @readonly
			 */
			public readonly validationErrors: Adobe.Incopy.ValidationErrors;
			/**
			 * The Version Cue version state of the file.
			 * @type {Adobe.Incopy.VersionState}
			 * @readonly
			 */
			public readonly versionState: Adobe.Incopy.VersionState;
			/**
			 * View preference settings.
			 * @type {Adobe.Incopy.ViewPreference}
			 * @readonly
			 */
			public readonly viewPreferences: Adobe.Incopy.ViewPreference;
			/**
			 * If true, the Document is visible.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly visible: boolean;
			/**
			 * A collection of windows.
			 * @type {Adobe.Incopy.Windows}
			 * @readonly
			 */
			public readonly windows: Adobe.Incopy.Windows;
			/**
			 * A collection of XML comments.
			 * @type {Adobe.Incopy.XMLComments}
			 * @readonly
			 */
			public readonly xmlComments: Adobe.Incopy.XMLComments;
			/**
			 * A collection of XML elements.
			 * @type {Adobe.Incopy.XMLElements}
			 * @readonly
			 */
			public readonly xmlElements: Adobe.Incopy.XMLElements;
			/**
			 * A collection of XML export maps.
			 * @type {Adobe.Incopy.XMLExportMaps}
			 * @readonly
			 */
			public readonly xmlExportMaps: Adobe.Incopy.XMLExportMaps;
			/**
			 * XML export preference settings.
			 * @type {Adobe.Incopy.XMLExportPreference}
			 * @readonly
			 */
			public readonly xmlExportPreferences: Adobe.Incopy.XMLExportPreference;
			/**
			 * A collection of XML import maps.
			 * @type {Adobe.Incopy.XMLImportMaps}
			 * @readonly
			 */
			public readonly xmlImportMaps: Adobe.Incopy.XMLImportMaps;
			/**
			 * XML import preference settings.
			 * @type {Adobe.Incopy.XMLImportPreference}
			 * @readonly
			 */
			public readonly xmlImportPreferences: Adobe.Incopy.XMLImportPreference;
			/**
			 * A collection of XML instructions.
			 * @type {Adobe.Incopy.XMLInstructions}
			 * @readonly
			 */
			public readonly xmlInstructions: Adobe.Incopy.XMLInstructions;
			/**
			 * A collection of XML items.
			 * @type {Adobe.Incopy.XMLItems}
			 * @readonly
			 */
			public readonly xmlItems: Adobe.Incopy.XMLItems;
			/**
			 * The XML preference settings.
			 * @type {Adobe.Incopy.XMLPreference}
			 * @readonly
			 */
			public readonly xmlPreferences: Adobe.Incopy.XMLPreference;
			/**
			 * A collection of xml stories.
			 * @type {Adobe.Incopy.XmlStories}
			 * @readonly
			 */
			public readonly xmlStories: Adobe.Incopy.XmlStories;
			/**
			 * A collection of XML tags.
			 * @type {Adobe.Incopy.XMLTags}
			 * @readonly
			 */
			public readonly xmlTags: Adobe.Incopy.XMLTags;
			/**
			 * XML view preference settings.
			 * @type {Adobe.Incopy.XMLViewPreference}
			 * @readonly
			 */
			public readonly xmlViewPreferences: Adobe.Incopy.XMLViewPreference;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerDocument(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Deletes unused XML markup tags.
			 * @returns {void}
			 */
			public deleteUnusedTags(): void;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, versionCommentsParam: string, forceSaveParam: boolean): void;
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Incopy.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam The spot color to load.
			 * @returns {Adobe.Incopy.Color}
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Incopy.Color;
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
			 * Prints the Document(s).
			 * @param {boolean} printDialogParam Whether to invoke the 
			 * print dialog (Optional)
			 * @returns {void}
			 */
			public print(printDialogParam: boolean): void;
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
			 * Saves the document.
			 * @param {File} toParam The file path. Note: Required only if 
			 * the document has not been previously saved. If the document 
			 * has previously been saved, specifying a path saves a copy 
			 * and closes the original document. (Optional)
			 * @param {SaveFileType} fileTypeParam The file type. 
			 * (Optional)
			 * @returns {Adobe.Incopy.Document}
			 */
			public save(toParam: File, fileTypeParam: SaveFileType): Adobe.Incopy.Document;
			/**
			 * Save a copy of the document
			 * @param {File} toParam The path for the copy. Note: Leaves 
			 * the original document open and does not open the copy. 
			 * (Optional)
			 * @param {SaveFileType} fileTypeParam The file type. 
			 * (Optional)
			 * @returns {void}
			 */
			public saveACopy(toParam: File, fileTypeParam: SaveFileType): void;
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
			 * @returns {Adobe.Incopy.VersionCueSyncStatus}
			 */
			public synchronizeWithVersionCue(syncConflictResolutionParam: SyncConflictResolution, versionCommentsParam: string): Adobe.Incopy.VersionCueSyncStatus;
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