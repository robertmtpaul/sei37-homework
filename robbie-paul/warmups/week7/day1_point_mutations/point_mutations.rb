def hamming strand1, strand2
    hamming_distance = 0
    pointer_position - ''
    strand1.chars.each_with_index do |letter, index|
        # index = strand1.index(letter)
        # puts index
        # puts "letter: #{letter}, index #{index}"
        if letter != strand2[index]
            hamming_distance += 1
            pointer_position += '^'
            pointer_position += '^'
        else
            pointer_position += ' '
        end # end of letter != strand2
    end # end of do
        puts hamming_distance
        puts strand1, strand2, pointer_position
end
    differences = strand1.chars.tap{|val| puts val}.map.with_index {|letter, index| letter != strand2[index] }
    p differences
    # hamming distance += 1
    hamming 'GAGCCTACTAACGGAT', 'CATCGTAATGACGGCCT'

