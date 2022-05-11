export interface Treeview {
    _id?:                ID;
    approved?:           string;
    child?:              boolean;
    cid?:                string;
    create_date?:        Date;
    external_reference?: any[];
    formated_name?:      string;
    heading?:            string;
    id?:                 string;
    name?:               string;
    preferred?:          string;
    termsrelation?:      Termsrelation[];
    update_date?:        Date;
    state?:              State;
}


export interface State {
    $initial?: boolean;
    $termsrelation?: TermsrelationState;
    $terms?: boolean;

}


export interface TermsrelationState {
    $BT?: boolean;
    $NT?: boolean;

}


export interface ID {
    $oid?: string;
}

export interface Termsrelation {
    terms?: Term[];
    rel?:   string;
}

export interface Term {
    objid?:             string;
    nodeid?:            string;
    name?:              string;
    formated_name?:     string;
    dis_name?:          string;
    dis_formated_name?: string;
    scopeNote?:         ScopeNote[] | null;
}

export interface ScopeNote {
    sourceType?: string;
    source?:     string;
    comment?:    string;
}
