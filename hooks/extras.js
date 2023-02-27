export function handleBranchName(branch){
    if(branch === 'cs'){
        return 'C.S.E.'
    }else if(branch === 'tt'){
        return 'T.T.'
    }else if(branch === 'me'){
        return 'M.E.'
    }else if(branch === 'ece'){
        return 'E.C.E.'
    }else if(branch === 'bt'){
        return 'Bio T.'
    }
    
    return 'invalid branch';
}